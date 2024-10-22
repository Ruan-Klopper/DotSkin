// src/app/api/products/route.js

import prisma from "@/utils/prisma";

export async function GET(request) {
  try {
    const products = await prisma.product.findMany({
      where: { is_active: true },
      include: {
        categories: true, // Include categories in the response
        reviews: true,
      },
    });
    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return new Response(JSON.stringify({ error: "Error fetching products" }), {
      status: 500,
    });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();

    // Destructure category_ids and the rest of the data
    const { category_ids, ...productData } = data;

    // Optional: Check if category_ids exist
    if (category_ids && category_ids.length > 0) {
      const categoriesExist = await prisma.category.findMany({
        where: { category_id: { in: category_ids } },
        select: { category_id: true },
      });
      const existingCategoryIds = categoriesExist.map((cat) => cat.category_id);
      const invalidCategoryIds = category_ids.filter(
        (id) => !existingCategoryIds.includes(id)
      );
      if (invalidCategoryIds.length > 0) {
        return new Response(
          JSON.stringify({
            error: "Some categories not found",
            invalidCategoryIds,
          }),
          {
            status: 400,
          }
        );
      }
    }

    const newProduct = await prisma.product.create({
      data: {
        ...productData,
        // Handle the categories relation
        categories:
          category_ids && category_ids.length > 0
            ? {
                connect: category_ids.map((category_id) => ({ category_id })),
              }
            : undefined,
      },
      include: {
        categories: true,
      },
    });

    return new Response(JSON.stringify(newProduct), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating product:", error);
    return new Response(JSON.stringify({ error: "Error creating product" }), {
      status: 500,
    });
  }
}

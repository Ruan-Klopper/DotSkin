// src/app/api/products/[product_id]/route.js

import prisma from "@/utils/prisma";

export async function GET(request, { params }) {
  try {
    const { product_id } = params;
    const product = await prisma.product.findUnique({
      where: { product_id },
      include: {
        categories: true, // Include categories in the response
        reviews: true,
      },
    });
    if (!product) {
      return new Response(JSON.stringify({ error: "Product not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response(JSON.stringify(product), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching product:", error);
    return new Response(JSON.stringify({ error: "Error fetching product" }), {
      status: 500,
    });
  }
}

export async function PUT(request, { params }) {
  try {
    const { product_id } = params;
    const data = await request.json();

    // Destructure category_ids and the rest of the data
    const { category_ids, ...productData } = data;

    // Handle categories connection
    let categoriesData = {};
    if (category_ids) {
      // Optional: Check if category_ids exist
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
      // Disconnect all previous categories and connect the new ones
      categoriesData = {
        categories: {
          set: category_ids.map((category_id) => ({ category_id })),
        },
      };
    }

    const updatedProduct = await prisma.product.update({
      where: { product_id },
      data: {
        ...productData,
        ...categoriesData,
      },
      include: {
        categories: true,
      },
    });

    return new Response(JSON.stringify(updatedProduct), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error updating product:", error);
    return new Response(JSON.stringify({ error: "Error updating product" }), {
      status: 500,
    });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { product_id } = params;
    await prisma.product.delete({
      where: { product_id },
    });
    return new Response(JSON.stringify({ message: "Product deleted" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    return new Response(JSON.stringify({ error: "Error deleting product" }), {
      status: 500,
    });
  }
}

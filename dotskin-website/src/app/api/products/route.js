// src/app/api/products/route.js

export async function GET(request) {
  // Mock data for testing
  const products = [
    { id: 1, name: "Hydrating Serum", price: 29.99 },
    { id: 2, name: "Facial Cleanser", price: 19.99 },
    { id: 3, name: "Sunscreen SPF 50", price: 24.99 },
  ];

  return new Response(JSON.stringify(products), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request) {
  const newProduct = await request.json();

  // For testing, we'll just return the product data received
  return new Response(
    JSON.stringify({ message: "Product created", product: newProduct }),
    {
      status: 201,
      headers: { "Content-Type": "application/json" },
    }
  );
}

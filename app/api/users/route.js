export async function GET() {
  return Response.json([
    { id: 1, name: "Arun" },
    { id: 2, name: "Priya" }
  ]);
}

export async function POST(request) {
  const body = await request.json();
  return Response.json({ message: "User created!", data: body });
}

export async function PUT(request) {
  const body = await request.json();
  return Response.json({ message: "User updated!", updated: body });
}

export async function DELETE() {
  return Response.json({ message: "User deleted!" });
}
import { Blog } from "@/utils/interfaces/Blog";

const posts: Blog[] = [];

export async function GET() {
  return Response.json(posts);
}

export async function POST(request: Request) {
  try {
    const { title, body } = await request.json();
    const newBlog: Blog = { id: crypto.randomUUID(), title, body };
    posts.push(newBlog);
    return Response.json(
      { message: "Blog created", blog: newBlog },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { message: "Error creating blog", error: error },
      { status: 500 }
    );
  }
}

import BlogCard from "@/components/BlogCard";
import { Blog } from "@/utils/interfaces/Blog";

const BlogPage = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );

  const blogs: Blog[] = await response.json();

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Blogs</h1>
      {blogs.length > 0 ? (
        blogs.map((blog: Blog) => (
          <BlogCard key={blog.id} id={blog.id} title={blog.title} />
        ))
      ) : (
        <p className="text-gray-500">No blogs found</p>
      )}
    </div>
  );
};

export default BlogPage;

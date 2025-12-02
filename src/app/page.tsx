import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Home</h1>

      <Link
        href="/blog"
        className="text-blue-600 font-semibold hover:underline"
      >
        Go to Blogs
      </Link>
    </div>
  );
}

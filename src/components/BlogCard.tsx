import Link from "next/link";

import { BlogCardProps } from "@/utils/interfaces/BlogCardProps";

const BlogCard = ({ title, id }: BlogCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300 mb-4">
      <div className="p-5">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>

        <Link
          href={`/blog/${id}`}
          className="text-blue-600 font-semibold hover:underline"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

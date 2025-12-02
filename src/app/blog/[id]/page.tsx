"use client";

import { useParams } from "next/navigation";

const BlogDetailPage = () => {
  const params = useParams();
  const id = params.id;
  
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Blog Detail {id}</h1>
    </div>
  );
};

export default BlogDetailPage;

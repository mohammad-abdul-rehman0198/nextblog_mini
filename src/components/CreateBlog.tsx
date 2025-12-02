"use client";

import { useState } from "react";
import { redirect } from "next/navigation";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({ title, body }),
    });
    const data = await response.json();

    setTitle("");
    setBody("");
    alert(data.message);
    redirect("/blog");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-6 shadow rounded-lg"
      >
        <h1 className="text-2xl font-semibold mb-4">Create Post</h1>

        <input
          className="w-full p-2 border rounded mb-4"
          placeholder="Post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full p-2 border rounded mb-4"
          placeholder="Post body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;

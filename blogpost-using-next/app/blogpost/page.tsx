"use client"; // This directive is for Next.js client components
import { useState, useEffect } from "react";

export default function BlogPost() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div className="text-center py-8">Loading posts...</div>;
  if (error)
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Blog Posts</h1>

      <div className="space-y-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">
              {post.title}
            </h2>
            <p className="text-gray-700">{post.body}</p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <span className="text-sm text-gray-500">Post ID: {post.id}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

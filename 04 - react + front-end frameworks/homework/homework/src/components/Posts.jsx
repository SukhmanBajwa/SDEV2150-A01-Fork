import React from "react";

import { posts } from "../data/sampleData";

export default function Posts() {
  return (
    <div className="mt-20 p-4 w-full">
      <h2 className="text-center mb-4">Posts</h2>
      <table className="table-auto w-full border-collapse">
        <tbody>
          <tr>
            <th className="border px-4 py-2">User ID</th>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Description</th>
          </tr>
          {posts.map((post) => (
            <tr key={post.id}>
              <td className="border px-4 py-2">{post.userId}</td>
              <td className="border px-4 py-2">{post.title}</td>
              <td className="border px-4 py-2">{post.body.slice(0, 100)}...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

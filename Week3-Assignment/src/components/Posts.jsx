import React, { useState, useEffect } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, []);

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-6">
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full mb-6 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
              {post.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;

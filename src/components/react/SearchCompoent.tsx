import React from "react";
import useSearchablePosts from "./SearchCompoentLogic";

// Define the structure of the post data
interface Post {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: {
    title: string;
    description: string;
    pubDate: Date;
    updatedDate?: Date;
    heroImage?: string;
  };
}

interface SearchablePostsProps {
  posts: Post[];
}

const SearchablePostsUI: React.FC<{
  query: string;
  filteredPosts: Post[];
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ query, filteredPosts, handleSearch }) => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search posts..."
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-300"
      />
      {query && (
        <ul className="bg-white shadow-md rounded-lg divide-y divide-gray-200">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <li
                key={post.id}
                className="p-4 hover:bg-gray-50 transition duration-300"
              >
                <a
                  href={`/blog/${post.slug}`}
                  className="block text-blue-600 hover:underline"
                >
                  <h2 className="text-xl font-semibold">{post.data.title}</h2>
                  <p className="text-sm text-gray-500">
                    {post.data.pubDate.toDateString()}
                  </p>
                </a>
              </li>
            ))
          ) : (
            <p className="p-4 text-gray-500">No posts found</p>
          )}
        </ul>
      )}
    </div>
  );
};

const SearchablePosts: React.FC<SearchablePostsProps> = ({ posts }) => {
  const { query, filteredPosts, handleSearch } = useSearchablePosts(posts);

  return (
    <SearchablePostsUI
      query={query}
      filteredPosts={filteredPosts}
      handleSearch={handleSearch}
    />
  );
};

export default SearchablePosts;

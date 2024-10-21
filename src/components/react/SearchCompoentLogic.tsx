import { useState, type ChangeEvent } from "react";
import fuzzy from "fuzzy";

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

// Custom hook for handling search logic
const useSearchablePosts = (posts: Post[]) => {
  const [query, setQuery] = useState<string>("");
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    if (searchQuery === "") {
      setFilteredPosts([]);
    } else {
      const options = {
        extract: (el: Post) => el.data.title,
      };

      const results = fuzzy.filter(searchQuery, posts, options);
      const matches = results.map((result) => result.original);

      setFilteredPosts(matches);
    }
  };

  return { query, filteredPosts, handleSearch };
};

export default useSearchablePosts;

# Search Feature for Astro Blog

This project adds a search feature to an Astro blog, allowing users to search through blog posts using fuzzy search logic.

## 🚀 How It Works

The search functionality uses the `fuzzy` library to provide an efficient search experience. Users can enter a query in the search input field, and the system filters blog posts based on that query. If there are matching results, they will be displayed dynamically; otherwise, a "No posts found" message will appear.

### Features:

- 🔍 Fuzzy search to improve search accuracy even with partial matches.
- 📄 Results update in real time as the user types.
- 📝 Easily extensible for more complex use cases (e.g., adding metadata or tags).

### Example Usage:

```jsx
import fuzzy from "fuzzy";

const posts = [
  { title: "First Post" },
  { title: "Second Post" },
  { title: "React and Astro" },
  { title: "Using Fuzzy Search" },
];

// Input search query and return matching posts
const searchQuery = "React";
const results = fuzzy.filter(searchQuery, posts, {
  extract: (post) => post.title,
});

console.log(results);
```

## 📂 Project Structure

```text
├── src/
│   ├── components/
│   │   └── SearchComponent.jsx  # Core search logic
│   └── pages/
│       └── index.astro          # Renders the search component
├── README.md
├── package.json
└── tsconfig.json
```

## 🧞 Commands

- `npm install`: Installs dependencies.
- `npm run dev`: Starts the local dev server.
- `npm run build`: Builds the project for production.

## 💻 Live Demo

To explore the code and try the search feature, check out the [GitHub repository](https://github.com/FutureInsightTech/SearchAstro).

import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import "./ChoresPage.css";

const URL = import.meta.env.VITE_SUPABASE_URL + "chores";

const headers = {
  apikey: import.meta.env.VITE_SUPABASE_APIKEY,
  "Content-Type": "application/json",
};

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(URL, { headers });
      const data = await response.json();
      console.log(data);
      setPosts(data);
    }

    getPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title?.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <header>
        <h1>Hvad har du lavet?</h1>
      </header>

      <main>
        <input
          className="search-bar"
          type="text"
          placeholder="Søg efter pligt..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <section className="posts-grid" aria-label="Supabase posts">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </section>
      </main>
    </>
  );
}

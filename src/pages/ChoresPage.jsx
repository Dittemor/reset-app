import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import OverlayPage from "./OverlayPage";
import "./ChoresPage.css";

const URL = import.meta.env.VITE_SUPABASE_URL + "chores";

const headers = {
  apikey: import.meta.env.VITE_SUPABASE_APIKEY,
  "Content-Type": "application/json",
};

export default function ChoresPage() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(URL, { headers });
      const data = await response.json();
      console.log(data);
      setPosts(data);
    }

    getPosts();
  }, []);

  return (
    <>
      <header>
        <h1>Hvad har du lavet?</h1>
      </header>

      <main>
        <section className="posts-grid">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onClick={() => setSelectedPost(post)}
            />
          ))}
        </section>
      </main>

      <OverlayPage
        selectedPost={selectedPost}
        onClose={() => setSelectedPost(null)}
      />
    </>
  );
}

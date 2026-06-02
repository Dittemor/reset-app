import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import "./RewardsPage.css";


const URL = import.meta.env.VITE_SUPABASE_URL + "rewards";
const headers = {
  apikey: import.meta.env.VITE_SUPABASE_APIKEY,
  "Content-Type": "application/json",
};

export default function Page() {
  const [posts, setPosts] = useState([]);

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
        <h1>Belønninger</h1>
      </header>
      <main>
        <section className="posts-card" aria-label="Supabase posts">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </section>

        <button className="create-reward-btn">Opret ny belønning</button>
      </main>
    </>
  );
}


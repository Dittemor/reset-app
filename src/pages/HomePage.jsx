

import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import "./HomePage.css";   

const URL = import.meta.env.VITE_SUPABASE_URL + "daily-chores";
const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY;

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(URL, {
        headers: {
          apikey: APIKEY,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setPosts(data);
    }

    getPosts();
  }, []);

  return (
    <>
      <main className="app">
        <section className="feed-intro">
          <h2 className="page-title">Halløjsovs!</h2>
          <p className="front-page-text">Velkommen tilbage!</p>
          <p className="feed-section-one">Udforsk events i nærheden af dig!</p>
        </section>

        <section className="post-grid">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </section>
      </main>
    </>
  );
}

console.log("VITE_SUPABASE_URL:", URL);
console.log("VITE_SUPABASE_APIKEY:", APIKEY);

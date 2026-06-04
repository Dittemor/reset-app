import { Icon } from "@iconify/react";

export default function PostCard({ post, onClick = undefined }) {
  return (
    <article className="post-card" onClick={onClick}>

      <div className="post-icon">
        {post.icon && <Icon icon={post.icon} width="28" height="28" />}
      </div>

      
      <div className="post-info">
        <h2>{post.title}</h2>
        <h3>{post.name}</h3>
        <p>{post.role}</p>

        {post.image && post.image.startsWith("http") && (
          <img src={post.image} alt={post.name || post.title} />
        )}
      </div>

      <div className="post-points">
        {post.points} point{post.points !== 1 ? "s" : ""}
      </div>
    </article>
  );
} 

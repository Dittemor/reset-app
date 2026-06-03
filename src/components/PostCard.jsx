export default function PostCard({ post, onClick = false }) {
  return (
    <article className="post-card" onClick={onClick}>
      <img src={post.image} alt={post.name || post.title} />

      <div className="post-info">
        <h2>{post.title}</h2>
        <h3>{post.name}</h3>
        <p>{post.role}</p>
        <p>
          {post.points} point{post.points !== 1 ? "s" : ""}
        </p>

        {post.icon && (
          <img
            className="post-icon"
            src={post.icon}
            alt={`${post.name} icon`}
          />
        )}
      </div>

    </article>
  );
}

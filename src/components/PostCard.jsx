export default function PostCard({ post, onClick }) {
  return (
    <article className="post-card" onClick={onClick}>
      <img src={post.image} alt={post.name} />

      <div className="post-info">
        <h2>{post.title}</h2>
        <h3>{post.name}</h3>
        <p>{post.role}</p>
        <p>
          {post.points} point{post.points !== 1 ? "s" : ""}
        </p>
      </div>

      <button
        onClick={(event) => {
          event.stopPropagation();
          onClick();
        }}
      >
        Klar
      </button>
    </article>
  );
}

import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import PostAuthor from "./PostAuthor"
import { selectPostById } from "./postsSlice"
import ReactionButtons from "./ReactionButtons"
import TimeAgo from "./TimeAgo"

const SingePostPage = () => {
  // Retrieve postId from params
  const { postId } = useParams()

  const post = useSelector((state) => selectPostById(state, Number(postId)))

  if (!post) {
    return (
      <section>
        <h2>Post not found</h2>
      </section>
    )
  }

  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>
        <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  )
}

export default SingePostPage
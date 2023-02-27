import { useSelector } from "react-redux"
import {
  getPostsError,
  getPostsStatus,
  selectAllPosts,
} from "./postsSlice"
import PostsExcerpt from "./PostsExcerpt"

const PostsList = () => {
  const posts = useSelector(selectAllPosts)
  const postsStatus = useSelector(getPostsStatus)
  const postsError = useSelector(getPostsError)

  let content
  if (postsStatus === "loading") {
    content = <p>Loading...</p>
  } else if (postsStatus === "succeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date))
    content = orderedPosts.map((post) => (
      <PostsExcerpt key={post.id} post={post} />
    ))
  } else if (postsStatus === "failed") {
    content = <p>{postsError}</p>
  }

  return (
    <section>
      {content}
    </section>
  )
}

export default PostsList

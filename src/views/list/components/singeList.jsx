import React from 'react'
import { useSelector } from 'react-redux'

const SingleList = ({ match }) => {
  const { postId } = match.params

  const post = useSelector(state =>
    state.posts.find(post => post.id === postId)
  )

  if (!post) {
    return (
      <section>
        <h2></h2>
      </section>
    )
  }

  return (
    // 有引用才会报错
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
      </article>
    </section>
  )
}

export default SingleList
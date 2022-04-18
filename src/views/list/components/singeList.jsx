import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import EditPostForm from './editPostForm'

const SingleList = () => {
  let { postId } = useParams();
  const post = useSelector(state =>
    state.posts.find(post => post.id === postId)
  )

  if (!post) {
    return (
      <section>
        <h2>没有找到数据</h2>
      </section>
    )
  }

  return (
    // 有引用才会报错
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <EditPostForm obj={ post }></EditPostForm>
      </article>
    </section>
  )
}

export default SingleList
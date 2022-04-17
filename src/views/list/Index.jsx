import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '@/components/navBar'
import AddPostForm from '@/components/form'
const PostsList = () => {
  const posts = useSelector(state => state.posts)

  const renderedPosts = posts.map(post => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
       <p>   
         详情
       </p>
    </article>
  ))
  return (

   <div>
     <Navbar></Navbar>
     <AddPostForm></AddPostForm>
     <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
   </div>
  )
}

export default PostsList
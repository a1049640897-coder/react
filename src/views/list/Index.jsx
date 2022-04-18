import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '@/components/navBar'
import AddPostForm from '@/components/form'
import EditPostForm from './components/editPostForm'
import { useNavigate } from "react-router-dom";
const PostsList = () => {
  const posts = useSelector(state => state.posts)
  const navigate = useNavigate()
  const renderedPosts = posts.map(post => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>  
       <div className="button muted-button" onClick={ ()=>{ navigate(`/posts/${post.id}`) } }>
        View Post
      </div>
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
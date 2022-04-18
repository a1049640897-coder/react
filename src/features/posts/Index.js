import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'More text' }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost(state, action) {
            state.push(action.payload)
        },
        editPost(state, action) {
            const  { id, title, content  } = action.payload
            console.log('id',id);
            const existingPost  = state.find(item => item.id == id)
            console.log('existingPost',existingPost.title);
           if(existingPost) {
            existingPost.title = title
            existingPost.content = content
           }
        },
    }
})

export const selector = (state) => { state.posts.initialState }
export const { addPost, editPost } = postsSlice.actions

export default postsSlice.reducer
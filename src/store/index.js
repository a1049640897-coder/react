import { configureStore} from '@reduxjs/toolkit'
import counterReducer  from '@/views/counterSlice.js'
import postsSlice from '@/features/posts'
const store = configureStore({
  reducer: {
    demo: counterReducer,
    posts: postsSlice 
  }
})

export default store

import { configureStore} from '@reduxjs/toolkit'
import counterReducer  from '@/views/counterSlice.js'
const store = configureStore({
  reducer: {
    demo: counterReducer 
  }
})

export default store

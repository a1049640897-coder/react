import './index.scss'
import { increment,decrement,selectCount }  from './counterSlice'
import { useSelector, useDispatch } from 'react-redux'

function test() {

   const counter = useSelector(selectCount)
   const dispatch = useDispatch()

   console.log('counter',counter);
   const add = () =>{
    dispatch(increment())
   } 
   const del = () =>{
    dispatch(decrement())
   }   
      // View: UI 定义
  return (
    <div className="container">
      <div>
        <h1>res: { counter} </h1>
        <div className="box">
          <button onClick={ add }>+</button>
          <button onClick={ del }>-</button>
        </div>
      </div>
    </div>
  )
  }
export default test
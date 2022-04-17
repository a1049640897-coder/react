import './index.scss'
import { increment,decrement,selectCount }  from './counterSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate,  createSearchParams  } from "react-router-dom";
function test(props) {

   const counter = useSelector(selectCount)
   const dispatch = useDispatch()
   const navigateTo  = useNavigate ()
   const params = { name:'title',age:'202' }
   
   const add = () =>{
    dispatch(increment())
   } 
   const del = () =>{
    dispatch(decrement())
   }   
   const toList = () =>{
  navigateTo('/list',{ state:params }) 
      // View: UI 定义 4545
  return (
    <div className="container">
      <div>
        <h1>res: { counter} </h1>
        <div className="box">
          <button onClick={ add }>+</button>
          <button onClick={ del }>-</button>
        </div>
        <div onClick={ toList }>
          跳转到外部页面sdsdsadas
        </div>
      </div>
    </div>
  )
  }
}
export default test
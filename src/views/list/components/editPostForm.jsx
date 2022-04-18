import { useState } from 'react'
import { editPost } from '@/features/posts'
import { useDispatch } from 'react-redux'
function EditPostForm(props){
    const dispatch = useDispatch()
    const { title, id, content } = props.obj
    const [ nTitle, setTitle] = useState(title)
    const [ nContent, setContent ] = useState(content)
    const titleChange =  (e) =>{
       console.log('e',e.target.value);
    }
    const submitForm =(e)=>{
        e.preventDefault()
        dispatch(editPost({
            id,
            title: nTitle,
            content: nContent
        }))
    }
    return (
    <>
    <div>
      <form  onSubmit={ submitForm }>
        标题: <input type="text"  onChange={ (e)=>{ setTitle(e.target.value) } }  />
        <br />
        内容: <input type="text"  onChange={ (e)=>{ setContent(e.target.value) } }  />
        <button >提交</button>
      </form>
    </div>
    </>
    )
}
export default EditPostForm
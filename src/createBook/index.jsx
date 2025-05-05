import React,{useState} from 'react'
import axios from "axios";
import useNavigate from "react-router";
export const CreateBook = () => {
  const [author,setAuthor] = useState("")
  const [Title,setTitle] = useState("")
  const [price,setPrice] = useState()
  const [page,setPages] = useState("")
  const navigate=useNavigate();
  let handleSubmit={
    const apiObj={
      title:title,
      author:author,
      price:price,
      no of pages: page
  }
    axios({
      method="GET",
      URL="localhost:5173,
      data:apiObj
      )}.then((res)=> navigate("/books");
  return (
    <>
    <div>CreateBook</div>
    <input type="text" value={author} placeholder='Enter Author name' onChange={(e)=>setAuthor(e.target.value)}/> <br />
    <input type="text" value={Title} placeholder='Enter Title name' onChange={(e)=>setTitle(e.target.value)}/> <br />
    <input type="Number" value={price} placeholder='Enter Price' onChange={(e)=>setPrice(e.target.value)}/>
   <br />
    <input type="Number" value={Title} placeholder="Pages" onChange={(e)=>setPages(e.target.value)}/> <br />
    <button onClick={()=>handleSubmit()}>Create Book</button>
    </>
  )
}

import React, { useEffect, useState } from 'react'
import axios from "axios"
import SingleComment from '../../components/SingleComment'
import { useNavigate } from 'react-router-dom'
const Comment = () => {
    const [rootcomment , setrootcomment ] = useState([])
    const email = localStorage.getItem("email")
    const user = localStorage.getItem("username")
    const [message , setMessage] = useState("")
    const cantype = message.length == 0
    const navigate = useNavigate()
  
    
    const handleChange = (e) => {
        setMessage(e.target.value)

    }

    useEffect(()=>{
    axios.get("http://localhost:8080/message/getrootpost").then((res)=> setrootcomment(res.data))
    },[rootcomment])

    const handleSubmit = (parentId) => {
      
    var newRootComment = {id:Date.now().toString(), body:message, username:user, parentId:parentId , createdAt: new Date().toLocaleDateString()  }
      
      axios.post("http://localhost:8080/message/newpost",newRootComment).then((res)=> console.log(res.data))
      setMessage("")
    }
    
    const handleLogout = () => {
         navigate("/")
    }

  return (
    <>
    <button onClick={handleLogout} >logout</button>
    <h2> welcome</h2>
    <h3>email: {email}</h3>
    <h3>name: {user}</h3>
    <br />
    <br />
    <br />

    <input type="text" placeholder='write you comment here' value={message} onChange={handleChange} />
    <button disabled={cantype} onClick={()=>handleSubmit("null")}>Submit</button>

    <br />

    <div>
      {
        rootcomment?.map((elem)=>(
           <SingleComment key={elem.id} {...elem} />
        ))
      }
    </div>


    </>
  )
}

export default Comment

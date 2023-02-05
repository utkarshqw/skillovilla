import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    const [userdata, setUserData] = useState({email:"",password:""}) 
    const navigate = useNavigate()
    const handleChange = (e) => {
    //   e.preventDefault()
      const {name, value} = e.target
      setUserData({
        ...userdata,
        [name]:value 
      })


    }



    const handleSubmit =(e) => {
        e.preventDefault()
        axios.post("http://localhost:8080/user/login",userdata).then((res)=> {
            if(res.data == false)
            {
                return alert("something went wrong ")
            }
            else 
            {   console.log(res.data.email)
                localStorage.setItem("username",res.data.name)
                localStorage.setItem("email",res.data.email)
                 navigate("commentpage")
            }
        })

    }
     
  return (
    <>
    <h2>Signin</h2>
    <form onSubmit={handleSubmit}>
        
        <input type="text" name="email" placeholder='email' value={userdata.email} onChange={handleChange} />
        <input type="text" name="password" placeholder='password' value={userdata.password} onChange={handleChange} />
        <input type="submit"  />
    
    </form>
    </>

  )
}

export default Signin
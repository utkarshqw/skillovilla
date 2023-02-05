import React, { useState } from 'react'
import axios from "axios"

const Signup = () => {
    const [userdata, setUserData] = useState({name:"",email:"",password:""}) 
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
        axios.post("http://localhost:8080/user/register",userdata).then((res)=> console.log(res))

    }
     
  return (
    <>
    <h2>Signup</h2>
    <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder='name' value={userdata.name} onChange={handleChange} />
        <input type="text" name="email" placeholder='email' value={userdata.email} onChange={handleChange} />
        <input type="text" name="password" placeholder='password' value={userdata.password} onChange={handleChange} />
        <input type="submit"  />
    
    </form>
    </>
  )
}

export default Signup
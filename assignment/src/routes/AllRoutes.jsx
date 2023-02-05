import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from '../pages/Authentication/Auth'
import Comment from '../pages/Comment/Comment'
// import Signup from '../pages/Authentication/Signup'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Auth/>} />
        <Route path="/commentpage" element={<Comment/>} />
    </Routes>
  )
}

export default AllRoutes
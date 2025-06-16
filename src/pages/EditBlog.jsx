import React from 'react'
import { BlogForm } from '../components'
import { useBlog } from '../context'
import { Navigate, useParams } from 'react-router-dom'

export default function EditBlog() {

  const {id} = useParams()
  const {blogs} = useBlog()

  const blog = blogs.find((blog)=> blog.id === parseInt(id))

  if(!blog) return <Navigate to='/'/>

  return (
    <div className=' bg-neutral-900'>
    <BlogForm blog={blog} btnValue={"Update"}/>
    </div>
  )
}

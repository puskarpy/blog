import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { useBlog } from '../context'

export default function BlogPage() {

    const {id} = useParams()
    const {blogs} = useBlog()

    const blog = blogs.find((blog) => blog.id === parseInt(id))

    if(!blog) return <Navigate to={'/'}/>

  return (
        <div className="max-w-5xl mx-auto p-6 flex flex-col gap-6">
      <div>
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          <p className="text-md text-neutral-200">Author: {blog.author}</p>
      </div>
      <div>
          <p className="text-lg text-neutral-300">{blog.blog}</p>
      </div>
    </div>
  )
}

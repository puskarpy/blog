import React, { useState } from 'react'
import { useBlog } from '../context'
import {Link} from 'react-router-dom'

export default function BlogList({ blog }) {

    const { removeBlog } = useBlog()
    const [isBlogEditable, setIsBlogEditable] = useState(false)

    const preview = blog.blog.split(" ").slice(0,10).join(" ") + "..."


    return ( 

      <div className="card w-full max-w-md bg-base-100 shadow-md">
      <div className="card-body">
        {/* Title */}
        <h2 className="card-title text-center text-xl font-bold">{blog.title}</h2>

        {/* Metadata */}
        <div className="text-sm text-gray-400 flex justify-between mt-1">
          <span>👤 {blog.author || "Anonymous"}</span>
          <span>📅 {blog.date || new Date().toLocaleDateString()}</span>
        </div>

        {/* Preview content */}
        <p className="mt-4 text-gray-300">{preview}</p>

        {/* Actions */}
        <div className="card-actions justify-end mt-4">
          <Link to={`/blog/${blog.id}`}  className="btn btn-soft btn-info btn-sm">View</Link>
          <Link to={`/edit/${blog.id}`}  className="btn btn-soft btn-warning btn-sm">Edit</Link>
          <button onClick={() => {
            removeBlog(blog.id)
        }} className="btn btn-soft btn-error btn-sm">Delete</button>
        </div>
      </div>
    </div>

     )

}


    // card
{/* <div className="card bg-base-100 shadow-md w-96 relative p-2">
  {/* Edit Button (top-right) 
  <Link to={`/edit/${blog.id}`} className="btn btn-soft btn-xs absolute right-2 top-2 z-10">
    Edit
  </Link>

  {/* Card Body 
  <div className="card-body items-center text-center">
    {/* Title 
    <h2 className="card-title text-xl font-bold justify-center">
      {blog.title}
    </h2>

    {/* Blog Content 
    <p className="text-sm text-gray-400">{blog.blog.split(" ").slice(0,10).join(" ") + "..." }</p>

    {/* Action Buttons 
    <div className="card-actions mt-4">
      <Link to={`/blog/${blog.id}`} className="btn btn-sm btn-soft btn-accent">View</Link>
      <button 
      onClick={() => {
            removeBlog(blog.id)
        }}
      className="btn btn-sm btn-soft btn-error">Delete</button>
    </div>
  </div>
</div> */}
  


{/* <div className="card bg-base-100 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{blog.title}</h2>
    <p>{blog.blog}</p>
    <div className="card-actions justify-end">
    <Link to={`/edit/${blog.id}`} className='btn btn-soft btn-accent'> Edit</Link>
      <button className='btn btn-soft btn-error'
        onClick={() => {
            removeBlog(blog.id)
        }}>Delete</button>
    </div>
  </div>
</div> */}


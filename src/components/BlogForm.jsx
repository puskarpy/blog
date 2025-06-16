import React, { useState, useEffect } from 'react'
import { useBlog } from '../context'
import { Navigate, useNavigate } from 'react-router-dom'

export default function BlogForm({btnValue, blog}) {

  const [content, setContent] = useState("")
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")

  const [showToast, setShowToast] = useState(false)

  const { addBlog, updateBlog } = useBlog()
  const navigate = useNavigate()

      const editBlog = () => {
        if (!blog) return

        updateBlog(blog.id, {...blog, title:title, blog:content, author:author})
        setIsBlogEditable(false)
    }

    useEffect(() => {
      if(blog){
        setAuthor(blog.author)
        setContent(blog.blog)
        setTitle(blog.title)
      }
    }, [blog])
    

  const add = (e) => {
    e.preventDefault()

if(blog){
      if(btnValue === "Update")
    {
      updateBlog(blog.id,{...blog, title:title, blog: content,author:author})

      setShowToast(true)
      
      setTimeout(() => {
        setShowToast(false)
        navigate('/')
        
      }, 1000);

      return
    }
    else{
      addBlog({ title, author, blog: content })
    }
  }

    
    setContent("")
    setTitle("")
    setAuthor("")
    navigate('/')
  }

  return (

    <>
    {showToast && (
<div role="alert" className="alert alert-success">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>Blog Updated Successfully!</span>
</div>
    )}

    <form onSubmit={add} className='flex gap-6 p-6 flex-col items-center'>
      <input
        type="text"
        placeholder="Title..."
        className="input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author name..."
        className="input"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <textarea
        className="textarea"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      ></textarea>
      <div className='flex gap-6'>
        <button type='submit' className="btn btn-soft btn-success">{btnValue}</button>
        <button onClick={()=>{
            const navigate = useNavigate()
            navigate('/')
        }} className="btn btn-soft btn-error">Cancel</button>
      </div>
    </form>
    </>
  )
}

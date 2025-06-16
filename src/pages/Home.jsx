import React from 'react'
import { BlogList } from '../components'
import { useBlog } from '../context'

export default function Home() {

  const {blogs} = useBlog()

  let content;
  if(blogs.length>0){
    content = (
 <div className='p-6 bg-neutral-900'>
      <h1 className='text-4xl font-bold font-leckerli mb-10'>Blogs</h1>
      <div className='flex gap-4 py-6 px-4 flex-wrap justify-center '>
        {blogs.map((blog)=>(
          <div key={blog.id} className="flex flex-col w-80 rounded shadow "
      style={{ minHeight: '13rem' }}>
            <BlogList blog={blog}/>
          </div>
        ))}
      </div>
      </div>
    )
  }
  else{
    content = (
       <div className='p-6 bg-neutral-900'>
      <h1 className='text-4xl font-bold font-leckerli mb-10'>Blogs</h1>
      <div className='flex gap-4 font-extralight italic tracking-wide text-neutral-200 py-6 text-md px-4 flex-wrap justify-center '>
        No blogs to show here... Create a new blog.
      </div>
      </div>
    )
  }

  return (
   <div>
    {content}
   </div>
  )
}

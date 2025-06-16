import React from 'react'
import { BlogList } from '../components'
import { useBlog } from '../context'

export default function Home() {

  const {blogs} = useBlog()
    
  let content;
  if(blogs.length > 0){

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
      <div className='font-extralight tracking-wide text-neutral-300 '>
        No Blogs to show here.. Create a new Blog.
      </div>
      </div>
    )
  }
  return (
<>
{content}
</>
  )
}



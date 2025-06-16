import { useState, useEffect, createContext, useContext } from "react";

const BlogContext = createContext({
    blogs:[
        {
           id:1,
           title:"firstBlog",
           blog:"This is a blog.",
           author:"John Doe",
           date: "2082-02-16",
           isBlogEditable: false, 
        }
    ],
    addBlog:(title,blog) =>{},
    updateBlog:(id, blog) =>{},
    removeBlog:(id) =>{},
    toggleEditable: (id) =>{} 
})

export const BlogProvider = ({children}) => {
     const [blogs, setBlogs] = useState([])
    
      const addBlog = (blog) => {
        setBlogs((prev) => [{id:Date.now(),...blog},...prev])
      }
    
      const updateBlog = (id, blog) => {
        setBlogs((prev)=> prev.map((prevBlog)=> prevBlog.id === id ? blog : prevBlog))
      }
    
      const removeBlog = (id) => {
        setBlogs((prev) => prev.filter((prevBlog) => prevBlog.id !== id))
      }

      const toggleEditable = (id) => {
        setBlogs((prev) => prev.map((prevTodo) => prevTodo.id === id? {...prevTodo, isBlogEditable: !(prevTodo.isBlogEditable)} : prevTodo ))
      }
    
    
      useEffect(() => {
        const blogs = JSON.parse(localStorage.getItem("blogs"))
        
        if(blogs && blogs.length > 0){
          setBlogs(blogs)
        }
      }, [])
    
      useEffect(() => {      
        localStorage.setItem("blogs", JSON.stringify(blogs))
    
      }, [blogs])
      
      
    
      return (
        <BlogContext.Provider value={{blogs, addBlog, updateBlog, removeBlog, toggleEditable}}>
            {children}
        </BlogContext.Provider>
      )
}

export const useBlog = () => useContext(BlogContext);
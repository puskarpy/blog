import React from 'react'

export default function Footer() {
  return (
   <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
    <aside>
    <p>
      Created by <a className='text-teal-200' href="https://www.pushkarniraula.com.np" target='__blank__' >Pushkar Niraula</a>
    </p>
      <br />
<blockquote className="border-l-4 border-gray-400 pl-4 italic text-neutral-100 bg-neutral-900 p-4 rounded">This project does not use any backend currently.  
All blog data is stored in the browser's local storage, so it will persist only in your local browser. <br />
I will add feautres like Backend functionality (e.g., saving blogs to a database, user authentication) in the future.</blockquote>

  </aside>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <a href='https://www.github.com/puskarpy' target='__blank__'>
       <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  className="fill-current">
  <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 
  3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
  0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61 
  -.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.084-.729.084-.729 
  1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.304 3.495.997 
  .108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 
  0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
  0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.005 2.045.138 3 
  .405 2.28-1.552 3.285-1.23 3.285-1.23 .645 1.653.24 2.873.12 3.176 
  .765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 
  5.92.435.375.81 1.096.81 2.22 0 1.606-.015 2.896-.015 
  3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 
  12.297c0-6.627-5.373-12-12-12"/>
</svg>

      </a>
    <a href="https://www.instagra.com/puskar.py" target='__blank__'>
      <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  className="fill-current">
  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.5.6.2 1.1.5 1.5.9.4.4.7.9.9 1.5.2.5.4 1.3.5 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.5-.2.6-.5 1.1-.9 1.5-.4.4-.9.7-1.5.9-.5.2-1.3.4-2.5.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.5-.6-.2-1.1-.5-1.5-.9-.4-.4-.7-.9-.9-1.5-.2-.5-.4-1.3-.5-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .5-2.5.2-.6.5-1.1.9-1.5.4-.4.9-.7 1.5-.9.5-.2 1.3-.4 2.5-.5C8.4 2.2 8.8 2.2 12 2.2M12 0C8.7 0 8.3 0 7 0.1c-1.3.1-2.2.3-3 .6-.9.3-1.6.7-2.3 1.4C1 2.9.6 3.6.3 4.5.1 5.3 0 6.2 0 7.5 0 8.8 0 9.2 0 12s0 3.2.1 4.5c.1 1.3.3 2.2.6 3 .3.9.7 1.6 1.4 2.3.7.7 1.4 1.1 2.3 1.4.9.3 1.8.5 3 .6 1.3.1 1.7.1 4.5.1s3.2 0 4.5-.1c1.3-.1 2.2-.3 3-.6.9-.3 1.6-.7 2.3-1.4.7-.7 1.1-1.4 1.4-2.3.3-.9.5-1.8.6-3 .1-1.3.1-1.7.1-4.5s0-3.2-.1-4.5c-.1-1.3-.3-2.2-.6-3-.3-.9-.7-1.6-1.4-2.3C20.6.6 19.9.2 19 .1c-.9-.3-1.8-.5-3-.6C15.2 0 14.8 0 12 0z" />
  <path d="M12 5.8A6.2 6.2 0 1 0 12 18.2 6.2 6.2 0 1 0 12 5.8zm0 10.3a4.1 4.1 0 1 1 0-8.2 4.1 4.1 0 0 1 0 8.2zM18.4 4.6a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
</svg>
    </a>

      <a href='https://www.facebook.com/puskar26/' target='__blank__'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
</footer>
  )
}

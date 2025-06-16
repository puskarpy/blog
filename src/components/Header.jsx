import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {

  const navigate = useNavigate()

  return (
    <div className="navbar bg-base-100 shadow-sm px-10" >
  <div className="navbar-start">
    <Link to={'/'} className="font-leckerli flex gap-4 tracking-wide text-2xl"> <img src="/favicon-32x32.png" alt="" /> Writely</Link>
  </div>
  <div className="navbar-end">
    <button onClick={()=>{
      navigate('/create')
    }}  className='btn btn-soft btn-info'>Create</button>
  </div>
</div>
  )
}

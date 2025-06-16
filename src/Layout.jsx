import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { BlogProvider } from './context'

export default function Layout() {
  return (
    <BlogProvider>
    <Header/>
    <Outlet/>
    <Footer/>
    </BlogProvider>
  )
}

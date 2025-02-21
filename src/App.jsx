import React from 'react'
import { Navbar } from './Component/Navbar'
import { Hero } from './Component/Hero'
import { Service } from './Component/Service'
import {Testimonial} from './Component/Testimonial'
import './App.css'
import { Footer } from './Component/Footer'
export default function App() {
  return (
      <>
  
<Navbar/>  
<Hero/> 
<Service/>
<Testimonial/>
<Footer/>
  
  </>)
}
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { useFetch } from './components/Hook/useFetch'


function App({}) {


  const[ value,setVale] =useState('All')
  let javob = ""
  if(value == "All"){
    javob = "/products"
  }
  else{
    javob = `/products/category/${value}`
  }
  console.log(value);
  const {data} = useFetch(javob,value)
  const {data:categories} =useFetch('/products/categories')
  let btns= categories?.data?.map((el,inx) =>(
    <button onClick={() =>setVale(el)}  key={inx}>{el}</button>
  ))

  
  return (
    <>

    <div className="hammasi " >
  <div className="all container">
  <button onClick={() =>setVale('All')} >
    All
  </button>
  {btns}

   </div>
    </div>
     <Navbar data={data?.data?.products} />
    </>
  )
}

export default App


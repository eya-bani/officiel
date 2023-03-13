import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../Shared/Footer'
import Navbar from '../Shared/Navbar'
import axios from 'axios'
const Addchampions = () => {
  let navigate=useNavigate()

    const[name,setname]=useState()
    const[region,setregion]=useState()
    const[legacy,setlegacy]=useState()
    const[defense,setdefense]=useState()
    const[speed,setspeed]=useState()
    const[img,setimg]=useState()
    const[attaque,setattaque]=useState()
    const addrod=(e)=>{
      e.preventDefault()
      axios.post(`http://localhost:8000/champions/`,{attaque:attaque,name:name,region:region,legacy:legacy,defense:defense,speed:speed ,img:img}).then((res)=>alert("the champion was added"))
      navigate("/champions")
    }
  return (

    <div className='addchamp'>
      <Navbar/>
      <h1>Add champions</h1>
      <form onSubmit={addrod}>
         <input type="text" placeholder='img' onChange={(e)=>setimg(e.target.value)} />
      <input type="text" placeholder='name' onChange={(e)=>setname(e.target.value)} />
      <input type="text" placeholder='region' onChange={(e)=>setregion(e.target.value)} />
      <input type="text" placeholder='legacy' onChange={(e)=>setlegacy(e.target.value)} />
      <input type="text" placeholder='speed' onChange={(e)=>setspeed(e.target.value)} />
      <input type="text" placeholder='defense' onChange={(e)=>setdefense(e.target.value)} />
     
      <input type="text" placeholder='attaque' onChange={(e)=>setattaque(e.target.value)} />
      <button type="submit">AddChampion</button>
      </form>
      <Footer/>
    </div>
  )
}

export default Addchampions

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import Footer from '../Shared/Footer'
import Navbar from '../Shared/Navbar'

const Oneid = () => {
  
    const[champions,setchampions]=useState([])
    const {id}=useParams()
    const getprod=()=>{
axios.get(`http://localhost:8000/champions/${id}`).then((res)=>{setchampions(res.data);console.log(res.data)})

    }
    useEffect(()=>
    {
        getprod();
    },[])
  return (
    <div className='showdata'>
      <Navbar/>
        <h1>The champion {champions.name}</h1>
   <div className="cards">
   
    <div className="card" key={champions.id}>
        <div className="cover"><img src={champions.img} alt="" /></div>
        
        <h2>Name :<span>{champions.name}</span> </h2>
        <h4>Region: <span>{champions.region}</span> </h4>
        <h4>Legacy :<span>{champions.legacy}</span> </h4>
        <h4>Attaque :<span>{champions.attaque}</span> </h4>
        <h4>Defence :<span>{champions.defense}</span> </h4>
        <h4>Speed :<span>{champions.speed}</span> </h4>

    </div>
 
   </div>
   <Footer/>
      
    </div>
  )
}

export default Oneid
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'

const Show = () => {
    let navigate=useNavigate()
    const[champions,setchampions]=useState([])
    const getprod=()=>{
axios.get('http://localhost:8000/champions').then((res)=>{setchampions(res.data);console.log(res.data)})

    }
    useEffect(()=>
    {
        getprod();
    },[])
  return (
    <div className='showdata'>
        <h1>Our Champions</h1>
   <div className="cards">
    {champions && champions.map((el)=>
    <div className="card" key={el.id}>
        <div className="cover"><img src={el.img} alt="" /></div>
        
        <h2>Name :<span>{el.name}</span> </h2>
        <h4>Region: <span>{el.region}</span> </h4>
        <h4>Legacy :<span>{el.legacy}</span> </h4>
        <h4>Attaque :<span>{el.attaque}</span> </h4>
        <h4>Defence :<span>{el.defense}</span> </h4>
        <h4>Speed :<span>{el.speed}</span> </h4>
        <button onClick={()=>navigate("/champions/"+el.id)}>VIEW MORE</button>
    </div>
    )}
   </div>
      
    </div>
  )
}

export default Show

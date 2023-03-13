import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Footer from '../Shared/Footer'
import Navbar from '../Shared/Navbar'

const Champions = () => {
    let navigate=useNavigate()
    const[champions,setchampions]=useState([])
    const[name,setname]=useState()
    const[region,setregion]=useState()
    const[legacy,setlegacy]=useState()
    const[defense,setdefense]=useState()
    const[speed,setspeed]=useState()
    const[upid,setupid]=useState()
    const[img,setimg]=useState()
    const[attaque,setattaque]=useState()
    const[op,setop]=useState(false)
    const getprod=()=>{
axios.get('http://localhost:8000/champions').then((res)=>{setchampions(res.data);console.log(res.data)})

    }
    useEffect(()=>
    {
        getprod();
    },[])
const delprod=(id)=>{
axios.delete(`http://localhost:8000/champions/${id}`).then((res)=>alert("the champion was deleted"))
navigate("/champions")
}

const upprod=(id)=>{
  axios.put(`http://localhost:8000/champions/${upid}`,{attaque:attaque,name:name,region:region,legacy:legacy,defense:defense,speed:speed ,img:img}).then((res)=>alert("the champion was updated"))
  navigate("/champions")

}

  return (
    <div className='showdata'>
   <Navbar/>
        <h1>Our Champions</h1>
   <div className="cards">
    {champions && champions.map((el)=>(    
    <div className="card" key={el.id}>
        <div className="cover"><img src={el.img} alt="" /></div>
        
        <h2>Name :<span>{el.name}</span> </h2>
        <h4>Region: <span>{el.region}</span> </h4>
        <h4>Legacy :<span>{el.legacy}</span> </h4>
        <h4>Attaque :<span>{el.attaque}</span> </h4>
        <h4>Defence :<span>{el.defense}</span> </h4>
        <h4>Speed :<span>{el.speed}</span> </h4>
        <div className="but">
        <button onClick={()=>navigate("/champions/"+el.id)}>VIEW MORE</button>
        <button onClick={()=>delprod(el.id)}>DELETE</button>
        <button onClick={()=>{setop(true);setname(el.name);setattaque(el.attaque);setregion(el.region);setimg(el.img);setlegacy(el.legacy);setdefense(el.defense);setspeed(el.speed);setupid(el.id)}} >update</button>
   </div>
    </div>)
  

    )}  <div className={`forma ${op? "open":""}`}>
      <form className='ff' onSubmit={upprod} >
        <h2>update form</h2>
<div onClick={()=>setop(false)} className="x">X</div>
         <input type="text" value={img} required onChange={(id)=>setimg(id.target.value)} />
        <input type="text" value={name} required onChange={(id)=>setname(id.target.value)} />
       
        <input type="text" value={region} required onChange={(id)=>setregion(id.target.value)} />
        <input type="text" value={legacy} required onChange={(id)=>setlegacy(id.target.value)} />
        <input type="text" value={defense} required onChange={(id)=>setdefense(id.target.value)} />
        <input type="text" value={speed} required onChange={(id)=>setspeed(id.target.value)} />
        <input type="text" value={attaque} required onChange={(id)=>setattaque(id.target.value)} />
        <button type="submit">update</button>
        
        
      </form>
      </div>
       </div>

      <Footer/>
    </div>
  )
}

export default Champions
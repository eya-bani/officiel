import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "/src/assets/logo.svg"
const Navbar = () => {
  let navigate= useNavigate()
  return (
    <div className='nav'>
  <img src={logo} alt="" />
  <ul>
    <li onClick={()=>navigate("/")} >Home</li>
    <li onClick={()=>navigate("/champions")} >Champions</li>
    <li onClick={()=>navigate("/Addchampions")} >Add_Chamiopns</li>
  </ul>
    </div>
  )
}

export default Navbar
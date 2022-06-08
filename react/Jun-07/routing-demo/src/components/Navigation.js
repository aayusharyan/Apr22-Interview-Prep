import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();

  const clicked = _ => navigate('secret/abcd?key=value&key1=value1&key2=value2')

  return (
    <div style={{marginBottom: "2rem"}}>
      <NavLink
        to="/"
        style={({ isActive }) => isActive ? {color: "white"} : undefined }
      >
        Home
      </NavLink> 
      || 
      <NavLink
        to="about"
        style={({ isActive }) => isActive ? {color: "white"} : undefined }
      >
        About
      </NavLink> 
      ||
      <button onClick={clicked}>Secret</button>
    </div>
  )
}

export default Navigation
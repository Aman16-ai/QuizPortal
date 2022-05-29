import React from 'react'
import {Link} from 'react-router-dom'
export default function 
() {
  return (
    <div>
        <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/login">login</Link></li>
      <li>
    <Link to="/register">signup</Link></li>
    </ul>
    </div>
  )
}

import React from 'react'
import "../App.css"
import {Link } from "react-router-dom";

function NabiBa() {
  return (
    <div>
      <header>
      <nav className="naviBa">
      <Link to="/">
        <span>
        MyBlog
        </span>
        </Link>
      </nav>
     </header>
    </div>
  )
}

export default NabiBa

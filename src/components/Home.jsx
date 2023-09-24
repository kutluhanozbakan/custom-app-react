import React from 'react'
import bg from "../assets/bg.jpg";
import { Link } from 'react-router-dom';
import "../styles/Home.css"
function Home() {
  return (
    <div className='mainPage' style={{
      backgroundImage: `url(${bg})`
     }}>
           <div className='whoami' >
            <Link to="/menu">
              <button>Kimim Ben</button>
            </Link>
           </div>
    </div>
  )
}

export default Home
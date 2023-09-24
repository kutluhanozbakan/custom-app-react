import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import "../../styles/Footer.css"
//npm install @mui/material @emotion/react @emotion/styled
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon/>
            <LinkedInIcon/>
            <TwitterIcon/>
        </div>
        <p>
            Vahit Kutluhan Özbakan
        </p>
    </div>
  )
}

export default Footer
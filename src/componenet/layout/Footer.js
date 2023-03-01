import React from 'react'
import { useState } from 'react'
import { dataFooter } from '../../FooterDB'
import '../../styles/Footer.css'
const Footer = () => {
  const [data,setData] = useState(dataFooter)
  console.log(data);
  return (
    <div className='footer'>
      {/* <h2>Footer</h2> */}
      <div className='container'>
        <div className='footer-inner'>
          {data.map((datumFooter) => {
            const { id, title, contact, about, careers, blog } = datumFooter
            return (
              <div key={id} className='footer-inner-data'>
                <h2> {title} </h2><br />
                <ul>
                  <li> {contact} </li><br />
                  <li> {about} </li><br />
                  <li> {careers} </li><br />
                  <li> {blog} </li>
                </ul>
              </div>
            )
          })}
        </div>
      </div>
      <p style={{textAlign:'center'}}>Copyright © 2023 Eggy.com. All rights reserved</p>
    </div>
  )
}

export default Footer
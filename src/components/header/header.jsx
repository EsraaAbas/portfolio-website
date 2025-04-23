import React from 'react';
import './header.css';
import header_img from '../../assets/images/header_img.jpeg';

export function Header () {
  return (
    <>
     <header>
         <img src={header_img} alt="header image" /> 
         <div className='header-content'>
         <p className='name'>Esraa Salman</p>
         <p className='job'>web developer & designer</p>
         <button className='contact_b'>CONTACT ME</button> 
         </div>
        
    </header>
    </>
   
  );
}
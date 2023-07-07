import React from 'react';
import logo from "../../images/logo.png";
import './header.css';

export default function Header() {
  return (
    <section className='h-wrapper' >
      <div className='h-container flexCenter paddings innerWidth ' >
        <img src={logo} alt='' width={100} />
        <div className='h-menu flexCenter' >
          <a href='' >Residencies</a>
          <a href='' >Our Value</a>
          <a href='' >Contact Us</a>
          <a href='' >Get Stardte</a>
          <button className='button' >
            <a href='' >Contact Us</a>
          </button>

        </div>

      </div>

    </section>
  )
}

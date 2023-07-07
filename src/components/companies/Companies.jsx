import React from 'react';
import './companies.css';
import prologis from '../../images/prologis.png'
import tower from '../../images/tower.png'
import equinix from '../../images/equinix.png'
import realty from '../../images/realty.png'

function Companies() {
  return (
    <section className='c-wrapper' >
        <div className="paddings innerWidth flexCenter c-container">
            <img src={prologis} />
            <img src={tower} />
            <img src={equinix} />
            <img src={realty} />
        </div>
    </section>
  )
}

export default Companies
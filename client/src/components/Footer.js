import React from 'react';
import calcoast from '../assets/images/calcoastlogo.jpg';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                
                <div className=''>
                <h2>JHMedical, Inc.</h2>
                <p>3005 Cave Hollow Way</p>
                <p>Bountiful, UT 84010</p>
                </div>
                <div className='footer-right'>
                    <img src={calcoast} alt="Cal Coast Ophthalmic Logo"></img>
                    <p>A Partner of <a href="https://www.calcoastophthalmic.com/">Cal Coast Ophthalmic</a></p>
                </div>
                <div className=''>
                    <p>Jason Hanni</p>
                    <p>1-801-540-9158</p>
                    <br />
                    <span className="text-muted footer-mid">Please call for prices/questions</span>
                </div>


            </div>

        </footer>
    )
}
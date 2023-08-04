import React from 'react';
import calcoast from '../assets/images/calcoastlogo.jpg';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <span className="text-muted">Please call for prices/questions</span>
            </div>
            <div className="container">
                <h3>JHMedical, Inc.</h3>
                <p>3005 Cave Hollow Way</p>
                <p>Bountiful, UT 84010</p>
                <br></br>
                <br></br>
                <h3>1-801-540-9158</h3>
            </div>
            <div>
            <p>A Partner of <a href="https://www.calcoastophthalmic.com/">Cal Coast Ophthalmic</a></p>
            <img src={calcoast} alt="Cal Coast Ophthalmic Logo"></img>
            </div>

        </footer>
    )
}
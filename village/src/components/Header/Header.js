import './Header.css'
import React from 'react';
import { NavLink } from 'react-router-dom';

function header(props) {
    return (
        <div className="header">
            <div className="left">
            <NavLink to={`/`}><h2>Smurf Village</h2></NavLink>
            </div>
            <div className="right">
                <NavLink to={`/smurf-form`}><p>Add Smurf</p></NavLink>
            </div>
        </div>
    )
};


export default header;
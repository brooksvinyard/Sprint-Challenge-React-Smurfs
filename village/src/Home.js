import React from 'react';
import Smurfs from './components/Smurfs';


function home(props) {
    return (
        <Smurfs smurfs={props.smurfs} />
    )
};


export default home;
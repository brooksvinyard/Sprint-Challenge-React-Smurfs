import React from 'react';

function SmurfCard({ smurfs, match }) {
    const { id } = match.params;
    const smurf = smurfs.find(thing => `${thing.id}` === id);

    if (!smurf) {
        return <h3>Loading Smurf...</h3>;
    }
    return (
        <div className="Smurf-List">
            <div className="Smurf">
                <h3>{smurf.name}</h3>
                <strong>{smurf.height} tall</strong>
                <p>{smurf.age} smurf years old</p>
            </div>
        </div>
    )
};


export default SmurfCard;
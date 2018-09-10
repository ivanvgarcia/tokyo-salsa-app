import React from 'react';
import { connect } from 'react-redux';
import { removeVenue } from '../../actions/venues';

const VenueCards = ( { dispatch, id, image, name, description, address } ) => (
    <div className="venue-card">
        <h2>{name}</h2>
        <img src={image} />
        <p>{description}</p>
        <p>{address}</p>
        <button onClick={() => {
            dispatch(removeVenue({id}))
        }}>Remove</button>
    </div>
);

export default connect()(VenueCards);
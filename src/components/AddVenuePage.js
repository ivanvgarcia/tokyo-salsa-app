import React from 'react';
import {connect} from 'react-redux';
import VenueForm from './VenueForm';
import { addVenue } from '../actions/venues';

const AddVenuePage = (props) => (
    <div>
        <h1>Add Venue</h1>
        <VenueForm 
            onAdd={(venue) => {
                props.dispatch(addVenue(venue));
                props.history.push('/venues');
            }}
        />
    </div>
);

export default connect()(AddVenuePage);

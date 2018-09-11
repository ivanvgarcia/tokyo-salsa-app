import React from 'react'
import {connect} from 'react-redux';
import VenueForm from './VenueForm';
import { editVenue, removeVenue } from '../actions/venues';

const EditVenuePage = (props) => {
    return (
        <div>
            <VenueForm
                venue={props.venue}
                onAdd={(venue) => {
                    props.dispatch(editVenue(props.venue.id, venue))
                    props.history.push('/venues')
                }}
            />
        <button onClick={() => {
            props.dispatch(removeVenue({id: props.venue.id }))
            props.history.push('/venues');
        }}>Remove</button>
        </div>
    )
};

const mapStateToProps = (state, props) => {
    return {
        venue: state.venues.find((venue) => venue.id === props.match.params.id)
    };
};;

export default connect(mapStateToProps)(EditVenuePage)

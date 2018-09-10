import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import VenueCards from './cards/VenueCards';
import selectVenues from '../selectors/venues';
import VenueCardsFilters from '../components/filters/VenueCardsFilters';

const VenuesPage = (props) => (
    <div>
        <h1>Venues</h1>
        <Link to="/venue/create">
            <button className="btn">
                Add Venue
            </button>
        </Link>
        <VenueCardsFilters />
        {props.venues.map((venue) => {
            return <VenueCards key={venue.id}{...venue}/>
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        venues: selectVenues(state.venues, state.filters)
    };
};

export default connect(mapStateToProps)(VenuesPage);
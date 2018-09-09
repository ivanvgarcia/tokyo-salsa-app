import React from 'react';
import { Link } from 'react-router-dom';

const VenuesPage = () => (
    <div>
        <Link to="/venue/create">
            <button className="btn">
                Add Venue
            </button>
        </Link>
    </div>
);

export default VenuesPage;

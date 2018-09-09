import React from 'react';
import { Link } from 'react-router-dom';

const EventsPage = () => (
    <div className="content">

        <Link to="/event/create">
            <button className="btn">Add an Event</button>
        </Link>

        
    </div>
);

export default EventsPage;

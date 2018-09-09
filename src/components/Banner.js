import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedEvent from './cards/FeaturedEvent';

const currentMonth = new Date().getMonth();

const month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

const thisMonth = month[currentMonth];


const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__info">
                <h2 className="banner__title">Featured Events</h2>
                <p className="banner__description">Check out the latest events for {thisMonth}! Or check out all events happening soon. </p>
                <button className="btn">All Events</button>
            </div>
            <div className="banner__featured-events">
                <FeaturedEvent/>
                <FeaturedEvent/>
                <FeaturedEvent/>
            </div>
        </div>
    );
}

export default Banner;
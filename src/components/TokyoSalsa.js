import React from 'react';
import store from '../store/store';
import HomeHeader from './header/HomeHeader'
import Banner from './Banner';
import FeaturedEvent from './cards/FeaturedEvent';
import venuesReducer from '../reducers/venues';

export default class TokyoSalsa extends React.Component {
    render() {
        return (
            <div>
                <HomeHeader/>
                <Banner />>
            </div>
        );
    }
}

console.log(store.getState());
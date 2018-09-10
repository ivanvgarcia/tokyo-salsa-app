import React from 'react';
import store from '../store/configureStore';
import HomeHeader from './header/HomeHeader'
import Banner from './Banner';
import FeaturedEvent from './cards/FeaturedEvent';

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
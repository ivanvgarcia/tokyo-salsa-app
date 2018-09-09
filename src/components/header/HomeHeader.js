import React from 'react';

const HomeHeader = () => {
    return (
        <div className="header">
            <div className="header__copy header__copy--yellow">
                <h2 className="header__title">Dance in the Heart of Tokyo</h2>
            </div>
            <div className="header__copy header__copy--greenish">
                <h2>Search for Recent Events</h2>
            </div>
            <div className="header__copy header__copy--purple">
                <h2>Find All the Hot Venues</h2>
            </div>
            
        </div>
    );
}

export default HomeHeader;
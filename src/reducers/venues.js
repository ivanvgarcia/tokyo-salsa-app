import { createStore, combineReducers } from 'redux';

// Venues Reducer

const venuesReducerDefaultState = [];

const venuesReducer = (state = venuesReducerDefaultState, action) => {
    switch (action.type) {
        default: 
            return state;
    }
};

// Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'name'   
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default: 
            return state;
    }
};

// Store creation

const store = createStore(
    combineReducers({
      venues: venuesReducer,
      filters: filtersReducer
    })
);

console.log(store.getState());

const venueState = {
    venues: [{
        id: 'dasdfdsf',
        name: 'Studio Pepe 2',
        image: 'img.jpg',
        description: 'This is a new venue',
        address: '1608 Melville Street'
    }],
    filters: {
        text: 'venue',
        sortBy: 'name', //location, address, title
    }
};

export default venuesReducer;
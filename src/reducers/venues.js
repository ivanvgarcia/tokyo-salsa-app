// Venues Reducer
const venuesReducerDefaultState = [];

export default (state = venuesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_VENUE':
            return [
                ...state,
                action.venue
            ];
        case 'REMOVE_VENUE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_VENUE':
            return state.map((venue) =>
                venue.id === action.id ? {...venue, ...action.updates} : venue);
        default: 
            return state;     
    }
};

// Store creation



// store.subscribe(() => {
//     const state = store.getState();
//     const visibleVenues = getVisibleVenues(state.venues, state.filters);
//     console.log(visibleVenues);
// });

// const venueOne = store.dispatch(addVenue({ name: 'Studio Pepe 2', image: 'img.jpg', description: 'S dance studio in Roppongi', address: '823 Roppongi Ave, Roppongi, Tokyo'}));

// const venueTwo = store.dispatch(addVenue({ name: 'Caribe', image: 'img2.jpg', description: 'Z dance club in Roppongi', address: '323 Roppongi Ave, Roppongi, Tokyo'}));

// const venueThree = store.dispatch(addVenue({ name: 'Asahi', image: 'img2.jpg', description: 'A dance club in Roppongi', address: '623 Roppongi Ave, Roppongi, Tokyo'}));

// const instructorOne = store.dispatch(addInstructor({ name: 'Ivan Garcia' }))

// store.dispatch(removeVenue({ id: venueOne.venue.id }));

// store.dispatch(editVenue(venueTwo.venue.id, { description: 'a fun place in Hibiya'} ));

// store.dispatch(setTextFilter());

// // store.dispatch(sortByName());
// store.dispatch(sortByAddress());

// const venueState = {
//     venues: [{
//         id: 'dasdfdsf',
//         name: 'Studio Pepe 2',
//         image: 'img.jpg',
//         description: 'This is a new venue',
//         address: '1608 Melville Street'
//     }],
//     filters: {
//         text: 'venue',
//         sortBy: 'name', //location, address, title
//     }
// };

// const instructorState = {
//     instructor: [{
//         id: 'dasdfdsf',
//         name: 'Studio Pepe 2',
//         image: 'img.jpg',
//         description: 'This is a new venue',
//         yearsOfExperience: '5',
//         typeOfDances: [ 'salsa', 'bachata']
//     }],
//     filters: {
//         text: 'venue',
//         sortBy: 'name', //type of dances, years of exp
//     }
// };
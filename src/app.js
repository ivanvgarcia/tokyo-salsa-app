import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addVenue} from './actions/venues';
import {addInstructor} from './actions/instructors';
import {addEvent} from './actions/events';
import { setTextFilter, setInstructorTextFilter, setEventTextFilter } from './actions/filters';
import getVisibleVenues from './selectors/venues';
import getVisibleInstructors from './selectors/instructors';
import 'normalize.css/normalize.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(faStroopwafel, faCoffee);

const store = configureStore();

store.dispatch(addVenue({
    name: 'Studio Pepe 2', 
    image: 'http://studio-pepe.com/wp/wp-content/uploads/2016/03/studio-pepe2.jpg', 
    description: 'A studio to dance on 2 in Roppongi', 
    address: '123 Roppongi Station, Roppongi, Tokyo'
}
));

store.dispatch(addVenue({
    name: 'Caribe', 
    image: 'http://studio-pepe.com/wp/wp-content/uploads/2016/03/studio-pepe2.jpg', 
    description: 'A dance club in Roppongi', 
    address: '321 Roppongi Station, Roppongi, Tokyo'
}
));

store.dispatch(addInstructor({
    name: 'Mitsue', 
    image: 'img1.jpg', 
    description: 'A salsa dancer in Tokyo',
    yearsOfExperience: '10',
    typeOfDances: [ 'salsa', 'cha cha', 'bachata']
}
));

store.dispatch(addInstructor({
    name: 'Ivan', 
    image: 'img1.jpg', 
    description: 'A salsa dancer from NYC',
    yearsOfExperience: '7',
    typeOfDances: [ 'salsa', 'marengue', 'bachata']
}
));

store.dispatch(addEvent({
    name: 'Mambongo',
    host: 'Mitsue',
    image: 'img.jpg',
    description: 'A great event to dance salsa',
    venue: 'Studio Pepe 2',
    date: 1250
}
));

store.dispatch(addEvent({
    name: 'Japan Salsa Congress',
    host: 'Ivan',
    image: 'img3.jpg',
    description: 'A great event to dance salsa',
    venue: 'Hilton Hotel',
    date: 200
}
));

const state = store.getState();
const visibleVenues = getVisibleVenues(state.venues, state.filters);
const visibleInstructors = getVisibleInstructors(state.instructors, state.filters);
console.log(visibleVenues);
console.log(visibleInstructors);
console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));


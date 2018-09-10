import { createStore, combineReducers } from 'redux';
import venuesReducer from '../reducers/venues';
import filtersReducer from '../reducers/filters';
import instructorsReducer from '../reducers/instructors';
import eventsReducer from '../reducers/events';

export default () => {
    const store = createStore(
        combineReducers({
          venues: venuesReducer,
          instructors: instructorsReducer,
          events: eventsReducer,
          filters: filtersReducer
        })
    );
    return store;
};

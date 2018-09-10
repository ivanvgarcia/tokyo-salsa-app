// Events Reducer
const eventsReducerDefaultState = [];

export default (state = eventsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EVENT':
            return [
                ...state,
                action.event
            ];
        case 'REMOVE_EVENT':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EVENT':
            return state.map((venue) =>
                event.id === action.id ? {...event, ...action.updates} : event);
        default: 
            return state;     
    }
};
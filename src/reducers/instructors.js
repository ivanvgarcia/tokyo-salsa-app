// Instructors Reducer
const instructorsReducerDefaultState = [];

export default (state = instructorsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_INSTRUCTOR':
            return [
                ...state,
                action.instructor
            ];
        case 'REMOVE_INSTRUCTOR':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_INSTRUCTOR':
            return state.map((venue) =>
                instructor.id === action.id ? {...instructor, ...action.updates} : instructor);
        default: 
            return state;     
    }
};
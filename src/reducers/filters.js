// Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'name'   
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return state = {
                ...state,
                text: action.text
            };
        case 'SET_INSTRUCTOR_TEXT_FILTER':
            return state = {
                ...state,
                text: action.text
            };
        case 'SET_EVENT_TEXT_FILTER':
            return state = {
                ...state,
                text: action.text
            };
        case 'SORT_BY_NAME':
            return {
                ...state,
                sortBy: 'name'
            };
        case 'SORT_BY_ADDRESS': 
            return {
                ...state,
                sortBy: 'address'
            };
        default: 
            return state;
    }
};
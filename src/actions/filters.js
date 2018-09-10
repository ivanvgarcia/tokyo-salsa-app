export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

export const setInstructorTextFilter = (text = '') => ({
    type: 'SET_INSTRUCTOR_TEXT_FILTER',
    text
});

export const setEventTextFilter = (text = '') => ({
    type: 'SET_EVENT_TEXT_FILTER',
    text
});

export const sortByName = () => ({
    type: 'SORT_BY_NAME'
});

export const sortByAddress = () => ({
    type: 'SORT_BY_ADDRESS'
});

// in the future create separate reducers and actions for each filter eg. eventFilter, InstructorFilter, etc


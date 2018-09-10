import uuid from 'uuid';

export const addInstructor = (
    {
        name = '',
        image = '',
        description = '',
        yearsOfExperience = '',
        typeOfDances = []
    } = {}
) => ({
    type: 'ADD_INSTRUCTOR',
    instructor: {
        id: uuid(),
        name,
        image,
        description,
        yearsOfExperience,
        typeOfDances
    }
});

export const removeInstructor = ({id} = {}) => ({
    type: 'REMOVE_INSTRUCTOR',
    id
});

export const editInstructor = (id, updates) => ({
    type: 'EDIT_INSTRUCTOR',
    id, 
    updates
});
import uuid from 'uuid';

export const addVenue = (
    {
        name = '', 
        image = '', 
        description = '',
        address= '',
        city= '',
        state= '',
        zipcode= ''
    } = {}
) => ({
    type: 'ADD_VENUE',
    venue: {
        id: uuid(),
        name,
        image,
        description,
        address,
        city,
        state,
        zipcode
    }
});

export const removeVenue = ({id} = {}) => ({
    type: 'REMOVE_VENUE',
    id
});

export const editVenue = (id, updates) => ({
    type: 'EDIT_VENUE',
    id, 
    updates
});
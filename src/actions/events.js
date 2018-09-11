import uuid from 'uuid';

export const addEvent = ({
  name = '',
  host = '',
  image = '',
  description = '',
  venue = '',
  date = undefined
} = {}) => ({
  type: 'ADD_EVENT',
  event: {
    id: uuid(),
    name,
    host,
    image,
    description,
    venue,
    date
  }
});

export const removeEvent = ({id} = {}) => ({type: 'REMOVE_EVENT', id});

export const editEvent = (id, updates) => ({type: 'EDIT_EVENT', id, updates});
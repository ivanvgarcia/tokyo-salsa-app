import React from 'react';
import {connect} from 'react-redux';
import {removeVenue} from '../../actions/venues';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const VenueCards = ({
  dispatch,
  id,
  image,
  name,
  description,
  address
}) => (
  <div className="venue-card">
    <Link to={`/edit/${id}`}>
      <div className="venue-card__header">
        <h2 className="venue-card__title">{name}</h2>
        <img className="venue-card__img" src={image}/>
      </div>
      <div className="venue-card__info">
        <p className="venue-card__description">{description}</p>
        <p><FontAwesomeIcon icon="coffee"/>{address}</p>
      </div>

      <button onClick={() => {
        dispatch(removeVenue({id}))
      }}>Remove</button>
    </Link>
  </div>
);

export default connect()(VenueCards);
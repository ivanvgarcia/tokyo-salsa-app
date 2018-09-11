import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const VenueCards = ({
  id,
  image,
  name,
  description,
  address,
  city,
  state,
  zipcode
}) => (
  <div className="venue-card">
      <div className="venue-card__header">
        <h2 className="venue-card__title">{name}</h2>
        <img className="venue-card__img" src={image}/>
      </div>
      <div className="venue-card__info">
        <h3>Description</h3>
        <p className="venue-card__description">
          <FontAwesomeIcon className="venue-card__icon" icon="info"/> {description}
        </p>
        <h3>Address</h3>
        <p className="venue-card__address">
          <FontAwesomeIcon className="venue-card__icon" icon="location-arrow"/> <a href={`https://www.google.com/maps/search/?api=1&query=${address}%20${city}%20${state}%20${zipcode}`}>{address}</a>
        </p>
      </div>

    <Link to={`/venue/edit/${id}`}>
      <button>Edit Information</button>
    </Link>
    

  </div>
);

export default VenueCards;
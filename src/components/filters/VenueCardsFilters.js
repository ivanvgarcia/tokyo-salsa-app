import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByName, sortByAddress} from '../../actions/filters';

const VenueCardsFilters = (props) => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={(e) => {
      props.dispatch(setTextFilter(e.target.value));
    }}/>
    <select
      value={props.filters.sortBy}
      onChange={(e) => {
      if (e.target.value === 'name') {
        props.dispatch(sortByName());
      } else if (e.target.value === 'address') {
        props.dispatch(sortByAddress());
      }
    }}>
      <option value="name">Name</option>
      <option value="address">Address</option>
    </select>
  </div>
);

const mapStateToProps = (state) => {
  return {filters: state.filters};
};

export default connect(mapStateToProps)(VenueCardsFilters);
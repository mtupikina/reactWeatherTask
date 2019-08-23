import React from 'react';
import { connect } from 'react-redux';

import { sortWeather } from '../actions';
import { SORT_OPTION_KEY } from '../const/localStorageKeys';
import sortWeatherService from '../services/sortHelper';

const ulStyle = {
  fontSize: '0.8em',
  width: '50%',
};

/**
  * builds markup for list of available cities
  *
  * state props:
  *   @weather - array of objects - each object represents detailed weather info for a single day
  *   @sortOptions - array of objects - list of available sort options
  *   @sortWeather - method - to sort weather by certain criteria
**/
let Sorting = ({ weather, sortOptions, sortWeather }) => {
  function isSelected(sortKey) {
    return weather && weather.metadata && weather.metadata.sortOrderKey === sortKey;
  }

  function onClick(key) {
    localStorage.setItem(SORT_OPTION_KEY, key);
    const sortedData = sortWeatherService.sortData(key, weather);

    sortWeather(sortedData);
  }

  return (weather
    ? <ul style={ulStyle} className='sorting'>
        {sortOptions.map((option) => (
          <li key={option.key} onClick={() => onClick(option.key)} className={isSelected(option.key) ? 'selected' : ''}>
            {option.name}
          </li>
        ))}
      </ul>
    : null
  );
};

const mapStateToProps = (state) => (
  {
    weather: state.weather,
    sortOptions: state.sortOptions
  }
);

const mapDispatchToProps = {
  sortWeather
};

Sorting = connect(mapStateToProps, mapDispatchToProps)(Sorting);

export default Sorting;

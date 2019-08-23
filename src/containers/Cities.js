import React from 'react';
import { connect } from 'react-redux';

import { getWeather } from '../actions';
import { CITY_KEY } from '../const/localStorageKeys';

/**
  * builds markup for list of available cities
  *
  * state props:
  *   @cities - array of objects - available on load
  *   @weather - array of objects - each object represents detailed weather info for a single day
  *   @getWeather - method - to load data from api
**/
let Cities = ({ cities, weather, getWeather }) => {
  function isSelected(lat, lng) {
    return weather && weather.metadata && weather.metadata.latitude === lat &&
      weather.metadata.longitude === lng;
  }

  function onClick(city) {
    localStorage.setItem(CITY_KEY, city.key);
    getWeather(...city.latlng);
  }

  return (
    <ul className='cities'>
      {cities.map((city) => (
        <li key={city.key} onClick={() => onClick(city)} className={isSelected(...city.latlng) ? 'selected' : ''}>
          {city.name}
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => (
  {
    cities: state.cities,
    weather: state.weather
  }
);

const mapDispatchToProps = {
  getWeather
};

Cities = connect(mapStateToProps, mapDispatchToProps)(Cities);

export default Cities;

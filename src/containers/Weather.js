import React from 'react';
import { connect } from 'react-redux'

import Day from '../components/Day';
import { getWeather } from '../actions';
import { CITY_KEY } from '../const/localStorageKeys';

const styleRoot = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '30px'
};

/**
  * builds markup for list of available cities
  *
   * state props:
  *   @cities - array of objects - available on load
  *   @weather - array of objects - each object represents detailed weather info for a single day
  *   @getWeather - method - to load data from api
**/
let Weather = ({ cities, weather, getWeather }) => {
  const selectedCityKey = Number(localStorage.getItem(CITY_KEY));

  if (!weather && selectedCityKey) {
    const city = cities.find(city => city.key === selectedCityKey);
    getWeather(...city.latlng);
  }

  return (weather
    ? <section style={styleRoot} >
        {weather.forecasts.map(item => (
          <Day weather={item} key={item.expire_time_gmt + item.fcst_valid} />
        ))}
      </section>
    : null
  );
};

const mapStateToProps = (state) => ({
  cities: state.cities,
  weather: state.weather
});

const mapDispatchToProps = {
  getWeather
};

Weather = connect(mapStateToProps, mapDispatchToProps)(Weather);

export default Weather;

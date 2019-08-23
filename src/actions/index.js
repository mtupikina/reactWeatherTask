import { GET_WEATHER, SET_WEATHER } from './actionTypes';

export const getWeather = (lat, lng) => ({
  type: GET_WEATHER,
  payload: { lat, lng }
});

export const sortWeather = (weather) => ({
  type: SET_WEATHER,
  payload: weather
});

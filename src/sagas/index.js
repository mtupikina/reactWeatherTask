import { put, takeLatest, all } from 'redux-saga/effects';

import { GET_WEATHER, SET_WEATHER } from '../actions/actionTypes';
import { SORT_OPTION_KEY } from '../const/localStorageKeys';
import sortWeatherService from '../services/sortHelper';

// sort data if sort option is available in local storage
function trySortWeather(data) {
  const selectedSortOptionKey = Number(localStorage.getItem(SORT_OPTION_KEY));

  if (selectedSortOptionKey) {
    data = sortWeatherService.sortData(selectedSortOptionKey, data);
  }

  return data;
}

function* fetchWeather(action) {
  const lat = action.payload.lat;
  const lng = action.payload.lng;
  const json = yield fetch(`https://api.weather.com/v1/geocode/${lat}/${lng}/forecast/daily/7day.json?apiKey=6532d6454b8aa370768e63d6ba5a832e&units=e`)
    .then(response => response.json())
    .then(trySortWeather);

  yield put({ type: SET_WEATHER, payload: json });
}

function* getWatcher() {
  yield takeLatest(GET_WEATHER, fetchWeather);
}

export default function* rootSaga() {
   yield all([
    getWatcher()
   ]);
}
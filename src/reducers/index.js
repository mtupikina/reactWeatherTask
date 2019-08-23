import { GET_CITIES, GET_WEATHER, SET_WEATHER } from '../actions/actionTypes';

const initialState = {
  cities: [
    {
      key: 1,
      name: 'Jerusalem',
      latlng: [31.7, 35.2]
    },
    {
      key: 2,
      name: 'London',
      latlng: [51.5, -0.1]
    },
    {
      key: 3,
      name: 'Paris',
      latlng: [48.8, 2.3]
    },
    {
      key: 4,
      name: 'Prague',
      latlng: [50.1, 14.4]
    },
    {
      key: 5,
      name: 'New York',
      latlng: [40.7, -73.9]
    }
  ],
  sortOptions: [
    {
      key: 1,
      name: 'By date'
    },
    {
      key: 2,
      name: 'Coldest first'
    },
    {
      key: 3,
      name: 'Hotest first'
    },
    {
      key: 4,
      name: 'Most humid first'
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITIES:
      return { ...state };

    case GET_WEATHER:
      return {
        ...state,
        loading: true
      };

    case SET_WEATHER:
      return {
        ...state,
        weather: action.payload,
        loading: false
      };

    default:
      return state;
   }
};

export default reducer;
import React from 'react';
import PropTypes from 'prop-types';

const weekDayNames = ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'San'];

/**
  * Get short description.
  *
  * @param {string}
  * @return {string} everything till the first full stop
**/
function getNarrative(string) {
  return string.split('.')[0].toString();
}

/**
  * builds markup of a weather summary for a single day
  *
  * @weather prop of type {object} - weather details for the single day
**/
let Day = ({ weather }) => {
  const date = new Date(weather.fcst_valid_local);
  const header = `${weekDayNames[date.getDay()]} ${date.getDate()}/${date.getMonth()}`;
  const narrative = getNarrative(weather.narrative);
  const code = weather.day ? weather.day.icon_code : 36;
  const imgSrc= `https://icons.wxug.com/i/c/v4/${code}.svg`;

  function toCelsius(value) {
     if (value === null) {
      return '';
    }

    return ((value - 32) * 5 / 9).toFixed(0);
  }

  return (
    <article className='day-info'>
      <header>{header}</header>
      <div>
        <span className="max-tempr">{toCelsius(weather.max_temp)}&deg;</span>
        <span className="separator">|</span>
        <span className="min-tempr">{toCelsius(weather.min_temp)}&deg;</span>
        C
      </div>
      <img src={imgSrc} alt={narrative} />
      <footer>
        {narrative}
      </footer>
    </article>
  );
};

Day.propTypes = {
  weather: PropTypes.object.isRequired
};

export default Day;
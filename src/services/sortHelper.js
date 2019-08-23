function selectStrategy(key) {
  switch (key) {
    case 2:
      return function(opt1, opt2) {
        return opt1.min_temp - opt2.min_temp;
      };

    case 3:
      return function(opt1, opt2) {
        return opt2.max_temp - opt1.max_temp;
      };

    case 4:
      return function(opt1, opt2) {
        return opt1.day.hi - opt2.day.hi;
      };

    default:
      return function(opt1, opt2) {
        return new Date(opt1.fcst_valid_local).getTime() - new Date(opt2.fcst_valid_local).getTime();
      };
   }
}

export default {
  /**
    * returns sorted data by given criteria.
    *
    * @param key {number} sortKey, one of [1, 2, 3, 4], where
    *   1 - sort by date
    *   2 - sort by hottest
    *   3 - sort by coldest
    *   4 - sort by most humid
    * @param data {array} array of objects to be sorted
  **/
  sortData: (key, data) => {
    const strategy = selectStrategy(key);
    const dataClone = JSON.parse(JSON.stringify(data));

    dataClone.metadata.sortOrderKey = key;
    dataClone.forecasts.sort(strategy);

    return dataClone;
  }
}
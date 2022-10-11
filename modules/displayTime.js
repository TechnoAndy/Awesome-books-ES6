import { DateTime } from './luxon.js';

const displayDateTime = () => {
  const date = DateTime.now();
  return date.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};

export default displayDateTime;
import moment from "moment";

export const numOfDays = (startDate) => {
  const start = moment.utc(startDate);
  const end = moment(new Date());
  const timePassed = end.to(start);
  return timePassed;
};

export default function parseDate({ year, month, date, hours, minutes, seconds }) {
  const startTime = localStorage.getItem("startTime");
  if (!startTime) {
    throw new Error("startTime not defined");
  }

  const parsedDate = new Date(startTime);
  parsedDate.setUTCFullYear(parsedDate.getUTCFullYear() - (year || 0));
  parsedDate.setUTCMonth(parsedDate.getUTCMonth() - (month || 0));
  parsedDate.setUTCDate(parsedDate.getUTCDate() - (date || 0));
  parsedDate.setUTCHours(parsedDate.getUTCHours() - (hours || 0));
  parsedDate.setUTCMinutes(parsedDate.getUTCMinutes() - (minutes || 0));
  parsedDate.setUTCSeconds(parsedDate.getUTCSeconds() - (seconds || 0));
  return parsedDate.toDateString();
}

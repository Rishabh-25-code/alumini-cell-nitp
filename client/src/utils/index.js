export function formatDateTime(dateTimeString) {
  const date = new Date(dateTimeString);

  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short',
  };

  return new Intl.DateTimeFormat('en-IN', options).format(date);
}
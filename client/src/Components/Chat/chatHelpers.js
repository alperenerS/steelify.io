export const formatDate = (timestamp) => {
    if (!timestamp) {
      console.error('Timestamp is undefined or null:', timestamp);
      return 'Invalid Date';
    }
    const date = new Date(timestamp);
    if (isNaN(date.getTime())) {
      console.error('Invalid Date:', timestamp);
      return 'Invalid Date';
    }
    return date.toLocaleString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };
  
  export const shouldShowTimestamp = (currentTimestamp, previousTimestamp) => {
    if (!currentTimestamp) return false;
    if (!previousTimestamp) return true;
    const currentDate = new Date(currentTimestamp);
    const previousDate = new Date(previousTimestamp);
    const differenceInMinutes = (currentDate - previousDate) / 1000 / 60;
    return differenceInMinutes >= 0;
  };
  
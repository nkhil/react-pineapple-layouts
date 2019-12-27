import moment from 'moment';

function formatDate(dateString) {
  const date = moment(dateString).format('LL');
  const fromNow = moment(dateString).fromNow();
  return `${date} (${fromNow})`;
}

export default formatDate;
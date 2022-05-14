const data = require('./data.json');

if (data && data.length) {
  data.forEach((ticket, index) => console.log(`Ticket ${(index + 1)}:`, ticket));
}

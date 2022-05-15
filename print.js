const data = require('./data.json');

if (data && data.length) {
  data.forEach((ticket, index) => console.log(
    `Ticket ${(index + 1)}:`, `
    Product: ${ticket.product}
    Type: ${ticket.type}
    Quantity: ${ticket.quantity}
    Unit Price: ${ticket.unitPrice}`
  ));
}

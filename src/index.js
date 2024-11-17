const entre = 'Fish Tacos';
const price = 14.97;

const order1 = {
  entre: entre,
  price: price,
};

const order2 = { entre, price };

console.log(`order1: ${JSON.stringify(order1)}`);
console.log(`order2: ${JSON.stringify(order2)}`);

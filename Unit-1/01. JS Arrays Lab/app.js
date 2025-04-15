const foods = [];

console.log('Exercise 1 result:', foods);

foods.push('pizza', 'cheeseburger')

console.log('Exercise 2 results:', foods);

foods.unshift('taco');

console.log('Exercise 3 results:', foods)

const favFood = foods[1];

console.log('Exercise 4 results:', favFood)

foods.splice(2, null, 'tofu')

console.log('Exercise 5 result:', foods)

foods.splice(1, 1, 'sushi', 'cupcake')

console.log('Exercise 6 result:', foods);

const yummy = foods.slice(1, 3)

console.log('Exercise 7 result:', yummy);

const soyIdx = foods.indexOf('tofu');

console.log('Exercise 8 result:', soyIdx);

const allFoods = foods.join('->')

console.log('Exercise 9 result:', allFoods);

const hasSoup = foods.includes('soup');

console.log('Exercise 10 result:', hasSoup);
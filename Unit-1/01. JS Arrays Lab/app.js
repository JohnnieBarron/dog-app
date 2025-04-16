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

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = [];

nums.forEach(function(nums) {
    if (nums % 2 !== 0) {
        odds.push(nums);
    }
});

console.log('Exercise 11 result:', odds);

const fizz = [];
const buzz = [];
const fizzbuzz = [];


nums.forEach(function(nums) {
    if (nums % 3 === 0) {
        fizz.push(nums);
    } if (nums % 5 === 0) {
        buzz.push(nums);
    } if (nums % 3 === 0 && nums % 5 === 0) {
        fizzbuzz.push(nums);
    }

});


console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);


const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

const numList = numArrays.length -1;

console.log('Exercise 13 result:', numList);

const num = numArrays [2][1];

console.log('Exercise 14 result:', num);

let total = 0;

for (let i = 0; i < numArrays.length; i++) {
    for (let j = 0; j < numArrays[i].length; j++) {
        total = total + numArrays[i][j];
    }
}

console.log('Exercise 15 result:\n', total);
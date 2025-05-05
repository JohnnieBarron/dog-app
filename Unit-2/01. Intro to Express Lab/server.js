// Initlize express in terminal, set port, and 
// 'require' express into the JS server
const express = require('express');
const app = express();

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];


  const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];



// define Routes


// 1. Be Polite, Greet the User
app.get('/greetings/:username', (req, res) => {
    res.send(`Welcome back to the store ${req.params.username}, are you ready to spend more money!`)
    console.log(req.params)
})

// 2. Rolling the Dice

app.get('/roll/:numbers', (req, res) => {
    const number = Number(req.params.numbers);

    if (Number.isInteger(number)) {
        const roll = Math.floor(Math.random() * number) + 1;
       return res.send(`You rolled a ${roll}!`)
    } else {
        res.send('You must pick a number!')
    };
    
})

// 3. I want THAT one!

app.get('/collectibles/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);
  
    if (isNaN(index) || index < 0 || index >= collectibles.length) {
      res.send('This item is not yet in stock. Check back soon!');
    } else {
      const item = collectibles[index];
      res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`);
    }
  });

  // 4. Filter Shoes by Query Parameters

  app.get('/shoes', (req, res) => {
    let { 'min-price': minPrice, 'max-price': maxPrice, type } = req.query;
  
    minPrice = parseFloat(minPrice);
    maxPrice = parseFloat(maxPrice);
    type = type?.toLowerCase();
  
    let results = shoes;
  
    if (!isNaN(minPrice)) {
      results = results.filter(shoe => shoe.price >= minPrice);
      res
    }if (!isNaN(maxPrice)) {
      results = results.filter(shoe => shoe.price <= maxPrice);
    }if (type) {
      results = results.filter(shoe => shoe.type.toLowerCase() === type);
    }
    res.json(results);

  });









// listen for HTTP reqs on port 3000
app.listen(3000, () => {
    console.log('on port 3000')
})
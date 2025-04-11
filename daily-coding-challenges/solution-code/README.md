# ![Daily Coding Challenges - Solution Code](../assets/solution-code.png)

## Solution Code

_Please note that the solutions provided for these coding challenges represent just one of many possible approaches to solving them. In programming, there are often multiple ways to achieve the same outcome, each with its own trade-offs in terms of efficiency, readability, and complexity. We encourage you to explore alternative solutions and techniques as you progress in your coding journey._

### Challenge: 00-sayHello (example)

```js
function sayHello() {
  return 'Hello!';
}
```

### Challenge: 01-addOne

```js
function addOne(num) {
  return num + 1;
}
```

### Challenge: 02-addTwoNumbers

```js
function addTwoNumbers(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN;
  }
  return a + b;
}
```

### Challenge: 03-sumNumbers

```js
function sumNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
```

### Challenge: 04-addList

```js
function addList(...nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}
```

### Challenge: 05-computeRemainder

```js
function computeRemainder(a, b) {
  if (b === 0) return Infinity;
  return a % b;
}

// or

function computeRemainder(a, b) {
  if (b === 0) return Infinity;
  return a - Math.floor(a / b) * b;
}
```

### Challenge: 06-range

```js
function range(start, end) {
  if (start > end) return 'First argument must be less than second';
  let result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}
```

### Challenge: 07-reverseUpcaseString

```js
function reverseUpcaseString(str) {
  return str.split('').reverse().join('').toUpperCase();
}
```

### Challenge: 08-removeEnds

```js
function removeEnds(str) {
  if (str.length < 3) return '';
  return str.substring(1, str.length - 1);
}
```

### Challenge: 09-charCount

```js
function charCount(str) {
  let count = {};
  str.split('').forEach((char) => {
    count[char] = (count[char] || 0) + 1;
  });
  return count;
}
```

### Challenge: 10-formatWithPadding

```js
function formatWithPadding(number, padChar, length) {
  let numStr = number.toString();
  while (numStr.length < length) {
    numStr = padChar + numStr;
  }
  return numStr;
}
```

### Challenge: 11-isPalindrome

```js
function isPalindrome(str) {
  str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  return str === str.split('').reverse().join('');
}
```

### Challenge: 12-hammingDistance

```js
function hammingDistance(str1, str2) {
  if (str1.length !== str2.length) return NaN;
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) count++;
  }
  return count;
}
```

### Challenge: 13-mumble

```js
function mumble(str) {
  return str
    .split('')
    .map((char, index) => char.repeat(index + 1))
    .join('-');
}
```

### Challenge: 14-fromPairs

```js
function fromPairs(pairs) {
  let obj = {};
  pairs.forEach((pair) => {
    obj[pair[0]] = pair[1];
  });
  return obj;
}
```

### Challenge: 15-mergeObjects

```js
function mergeObjects(target, ...sources) {
  sources.forEach((source) => {
    Object.assign(target, source);
  });
  return target;
}
```

### Challenge: 16-findHighestPriced

```js
function findHighestPriced(items) {
  if (items.length === 0) {
    return null; // or an appropriate value for an empty array
  }

  let highestPriced = items[0];
  for (let i = 1; i < items.length; i++) {
    if (items[i].price > highestPriced.price) {
      highestPriced = items[i];
    }
  }
  return highestPriced;
}

// or

function findHighestPriced(items) {
  return items.reduce(
    (highest, item) => (item.price > highest.price ? item : highest, items[0])
  );
}
```

### Challenge: 17-mapArray

```js
function mapArray(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i));
  }
  return result;
}
```

### Challenge: 18-reduceArray

```js
function reduceArray(arr, callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i);
  }
  return accumulator;
}
```

### Challenge: 19-flatten

```js
function flatten(arr) {
  let flatArray = [];
  let stack = [...arr];

  while (stack.length > 0) {
    let current = stack.pop();
    if (Array.isArray(current)) {
      stack.push(...current); // Add all elements back to the stack
    } else {
      flatArray.push(current);
    }
  }
  return flatArray.reverse(); // Reverse to maintain original order
}

// or recursively

function flatten(arr) {
  let flatArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatArray = flatArray.concat(flatten(arr[i]));
    } else {
      flatArray.push(arr[i]);
    }
  }
  return flatArray;
}
```

### Challenge: 20-isPrime

```js
function isPrime(num) {
  // Check for less than or equal to 1 and non-integer values
  if (num <= 1 || !Number.isInteger(num)) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false; // Check divisibility by each number
  }
  return true;
}
```

### Challenge: 21-primeFactors

```js
function primeFactors(num) {
  let factors = [];
  for (let i = 2; i <= num; i++) {
    while (isPrime(i) && num % i === 0) {
      factors.push(i);
      num /= i;
    }
  }
  return factors;
}
```

### Challenge: 22-intersection

```js
function intersection(a1, a2) {
  let result = [];
  // create copy of 2nd array to prevent mutating original
  let _a2 = [...a2];
  a1.forEach((val) => {
    let idx = _a2.indexOf(val);
    if (idx > -1) result.push(_a2.splice(idx, 1)[0]);
  });
  return result;
}

// or

function intersection(arr1, arr2) {
  return arr1.filter((value) => arr2.includes(value));
}
```

### Challenge: 23-balancedBrackets

```js
function balancedBrackets(str) {
  let stack = [];
  let brackets = { '(': ')', '[': ']', '{': '}' };
  for (let char of str) {
    if (brackets[char]) {
      stack.push(brackets[char]);
    } else {
      if (stack.pop() !== char) return false;
    }
  }
  return stack.length === 0;
}
```

### Challenge: 24-isWinningTicket

```js
function isWinningTicket(ticket) {
  for (let i = 0; i < ticket.length; i++) {
    let pair = ticket[i];
    let str = pair[0];
    let charCode = pair[1];
    let found = false;

    for (let j = 0; j < str.length; j++) {
      if (str.charCodeAt(j) === charCode) {
        found = true;
        break; // Stop searching once we find a match
      }
    }

    if (!found) {
      return false; // If any pair doesn't match, the ticket isn't winning
    }
  }
  return true; // If all pairs match, the ticket is winning
}

// or

function isWinningTicket(ticket) {
  return ticket.every(([str, charCode]) =>
    str.includes(String.fromCharCode(charCode))
  );
}
```

### Challenge: 25-getNumForIP

```js
function getNumForIP(ip) {
  let parts = ip.split('.').map(Number);
  let total = 0;
  for (let i = 0; i < parts.length; i++) {
    total += parts[i] * Math.pow(256, 3 - i);
  }
  return total;
}

//or

function getNumForIP(ip) {
  return ip
    .split('.')
    .reverse()
    .reduce((total, num, i) => {
      return total + parseInt(num) * 256 ** i;
    }, 0);
}
```

### Challenge: 26-toCamelCase

```js
function toCamelCase(str) {
  let result = '';
  let nextCharUpperCase = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '-' || str[i] === '_') {
      nextCharUpperCase = true;
    } else {
      if (nextCharUpperCase) {
        result += str[i].toUpperCase();
        nextCharUpperCase = false;
      } else {
        result += str[i];
      }
    }
  }

  return result;
}

// or

function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
}
```

### Challenge: 27-countTheBits

```js
function countTheBits(num) {
  let count = 0;
  while (num > 0) {
    if (num % 2 === 1) {
      // Check if the last bit is 1
      count++;
    }
    num = Math.floor(num / 2); // Shift right by one bit
  }
  return count;
}

// or

function countTheBits(num) {
  return num.toString(2).split('0').join('').length;
}
```

### Challenge: 28-gridTrip

```js
function gridTrip(start, moves) {
  let position = [...start];
  let moveArray = moves.match(/([UDLR])(\d+)/g);
  moveArray.forEach((move) => {
    let direction = move[0];
    let distance = parseInt(move.slice(1));
    switch (direction) {
      case 'U':
        position[1] += distance;
        break;
      case 'D':
        position[1] -= distance;
        break;
      case 'R':
        position[0] += distance;
        break;
      case 'L':
        position[0] -= distance;
        break;
    }
  });
  return position;
}
```

### Challenge: 29-addChecker

```js
function addChecker(arr, sum) {
  let start = 0,
    end = arr.length - 1;
  while (start < end) {
    let currentSum = arr[start] + arr[end];
    if (currentSum === sum) return true;
    if (currentSum < sum) start++;
    else end--;
  }
  return false;
}
```

### Challenge: 30-totalTaskTime

```js
function totalTaskTime(tasks, numThreads) {
  let time = 0,
    shortest,
    threads;
  while (tasks.length > numThreads) {
    // extract a task for each thread
    threads = tasks.splice(0, numThreads);
    // Find out the time for the task that will finish first.
    // Using the spread operator to provide Math.min with a list of values
    shortest = Math.min(...threads);
    // Add the time for that shortest task
    time += shortest;
    // Reduce each task in threads by the shortest task time and
    // remove all of those completed "short" tasks
    threads = threads.map((t) => t - shortest).filter((t) => t);
    // Put any remaining tasks back into threads and do it again (loop)...
    tasks = threads.concat(tasks);
  }
  // When num remaining tasks is less or equal to numThreads,
  // we just need to add the time from the longest remaining task.
  // The ternary protects against Math.max returning infinity on an empty array
  return time + (tasks.length ? Math.max(...tasks) : 0);
}

// or

/* One-liner using different 'addition' approach */
function totalTaskTime(tasks, numThreads) {
  return (
    tasks.length &&
    Math.max(
      ...tasks.reduce(
        (b, t, i) => (b[b.indexOf(Math.min(...b))] += t) && b,
        tasks.splice(0, numThreads)
      )
    )
  );
}
```

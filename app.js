console.log("Exc 1!\n==========\n");
for (let nums = 0; nums < 101; nums++)
  if (nums % 2) {
    console.log(`${nums} is a ODD number!`);
  } else {
    console.log(`${nums} This a EVEN number!`);
  }

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let nums = 0; nums < 101; nums++)
  if (nums % 3) {
    console.log(`${nums} = FIZZ`);
  } else if (nums % 5) {
    console.log(`${nums} = BUZZ`);
  } else if (nums % 3 || 5) console.log(`${nums} = FIZZBUZZ`);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let nums = 0;
do {
  if (nums % 2) {
    console.log(`${nums} is an ODD number!`);
  } else {
    console.log(`${nums} is an EVEN number!`);
  }
  nums++;
} while (nums < 101);

//Exc 4 Section
console.log("EXERCISE 4:\n===========\n");

let value = Math.round(Math.random() * 500);
// creates a random number between 0 and 500
let n = Math.round(Math.random() * (1000 - 1) + 1);
// creates a random number between 100 and 500
//Create a for loop that iterates from 0 to n
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}
//If your current value iteration is queal to value, then print 'found value!' and then break out of the loop
function findValue(n, value) {
  let found = false;
  for (let i = 0; i <= n; i++) {
            if (i === value) {
      console.log("Found value!");
      found = true;
      break;
//If you do not ever find the value and break out of the loop, then after the loop is finished, print 'Did not find value'
   }
  }
  if (!found) {
    console.log("Did not find value");
  }
}

//Exc 5 Section
console.log('EXCERCISE 5: \n==========\n');

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

//Re-implement exercise 2, but use `start` as the initial value for `i`, `n` as the range limit in `i <= n`, and `fizzDivisor` and `buzzDivisor` as the dependent values for determining "FIZZ" and "BUZZ" print messages.
for (let i = start; i <= n; i++) {
    // Determine the output based on divisibility
    if (i % fizzDivisor === 0 && i % buzzDivisor === 0) {
      console.log(`${i} = FIZZBUZZ`);
    } else if (i % fizzDivisor === 0) {
      console.log(`${i} = FIZZ`);
    } else if (i % buzzDivisor === 0) {
      console.log(`${i} = BUZZ`);
    }
  }



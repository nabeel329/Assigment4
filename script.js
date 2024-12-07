const arrays=[
    42,
    true,
    "Hello world"
    ,{name:"john",age:25,isStudent:false,},
    false,
    3.14,
    "JavaScript is Fun"
];


// Question No 1  Covert all elements to their string representation using map method
  
console.log("Question NO 1");


const jsonArray = arrays.map(element => JSON.stringify(element));

console.log(jsonArray);


// Question No 2 Filter Only Number elements using Filter method

console.log("Question NO 2");

const numberElements = arrays.filter(element => typeof element === "number");

console.log(numberElements);


// Question No 3  Log each element,s type to the console (does not return any thing) using for each method

console.log("Question NO 3");

arrays.forEach(element => {
    console.log(`${element}: ${typeof element}`);
});


// Question No 4  SUm up only the numbers in ARRay reduce method
console.log("Question NO 4");
const sumOfNumbers = arrays.reduce((sum, element) => {
    return typeof element === "number" ? sum + element : sum;
}, 0);

console.log(sumOfNumbers);

// Question No 5 Find the First Boolean Value in an array using Find Method?
console.log("Question NO 5");

const firstBoolean = arrays.find(element => typeof element === "boolean");

console.log(firstBoolean)


// Question no 6  Find the  index of the first  object  in an array  using FindIndex Method?

console.log("Question NO 6");
const indexOfFirstObject = arrays.findIndex(element => typeof element === "object" && element !== null);

console.log(indexOfFirstObject);

// Question no 7 Check if the array contains any numbers in any array using some method?

const containsNumber = (input) => {
    if (Array.isArray(input)) {
       
        return input.some(element => containsNumber(element));
    } else if (typeof input === "number") {
        return true; 
    }
    return false; 
};

console.log("Question NO 7");
const hasNumber = containsNumber(arrays);
console.log(hasNumber);
// Question no 8  check if all elements are type 'string' in an array  using every method

console.log("Question no 8");

const allStrings = arrays.every(element => typeof element === "string");

console.log(allStrings);
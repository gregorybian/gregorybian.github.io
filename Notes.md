# Spread operator = ...
- Use - expands iterables such as array or string into elements
- Syntax - ..."Gregory" -> splits Gregory into elements

# Rest Parameters = (...rest)
- Use - bundles seperate elements into an array
- Syntax - ...foods -> anything put into foods is joined into 1 element
- Example
```
const food1 = "hamburger";
const food2 = "sushi";
const food3 = "pizza";

function openFridge(...foods){
    console.log(...foods);
}

openFridge(food1, food2, food3)

# .split(" ")
splits a string into array of substrings
```
let string = "Gregory-Bian";

let newString = string.split("-");
console.log(newString);
```

# Callbacks
Function passed as an argument to another function to handle asynchronous operations
- read a file
- network requests
- Interacting with databases

<!---->

"Hey, when you're done, call this next"

```
sum(displayConsole, 1, 2);

function sum(callback, x, y){
    let result = x+y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}
```

# forEach()
used to iterate over elements and apply function (callback)
<br>
when called gives, element, index, array

```
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(double);
numbers.forEach(display);

function double(element, index, array){
    array[index] = element * 2;
}

function display(element){
    console.log(element);
}
```

# .map()
accepts a callback and applies function to each element of array. returns new array
```
const numbers = [1,2,3,4,5];
const square = numbers.map(squares);

console.log(square);

function squares(element){
    return Math.pow(element, 2);
}
```






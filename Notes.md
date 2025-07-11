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


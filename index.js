const food1 = "hamburger";
const food2 = "sushi";
const food3 = "pizza";

function openFridge(...foods){
    console.log(...foods);
}

openFridge(food1, food2, food3)
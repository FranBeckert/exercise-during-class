// exercise 1
let fruits = ["apple", "banana", "mango", "papaya", "orange"]
console.log(fruits[2]);

// version 2
fruits.forEach((fruit, index) => {
    if (index === 2) {
        console.log(fruit)
    }
});

// version 3
for (let i=0; i<fruits.length; i++) {    
    if (i === 2) {
        console.log(fruits[i])
        break;
    }    
}

// exercise 2
function lastItem (item) {
    return lastElement = item[item.length -1];
};
console.log(lastItem(fruits))

fruits.push("Blueberry", "Ananas");
fruits.pop();
console.log(fruits)


// exercise 3
let vegetables = ["carrot", "cabbage", "cucumber", "tomate"]

let newItem1 = vegetables.slice(1, 4) 
let mixedItem = newItem1.concat(fruits)
console.log(mixedItem);

// exercise 4

// creat an html element, give an identifier, link with js, try to print a text in that element, link the functionalitty with the variable



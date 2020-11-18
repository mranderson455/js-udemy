var array = ["Banana", "Apples", "Oranges", "Blueberries"];

array.splice(0, 1);
array = array.concat(["Kiwi"]);
array.splice(0, 1);

array.reverse();

console.log(array);

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(array2[1][1][0]);
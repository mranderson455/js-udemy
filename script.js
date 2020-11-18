var arr = ["dog", "cat", "parrot"];
arr = arr.concat(["tiger", "lion"]);

arr = arr.sort();
console.log(arr);

arr = ["a", 1, undefined, true];

arr = [function() {
    console.log("yeet");
},
function() {
    console.log("yah");
}]
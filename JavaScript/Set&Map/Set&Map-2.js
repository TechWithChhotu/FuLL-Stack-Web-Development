/*=======================
* Set and Map are two built-in data structures in JavaScript that provide
  efficient ways to store and manipulate collections of data. 
========================*/

let myMap = new Map();
myMap.set("a", 20);
myMap.set("a", 30); //simply update value of key '1'
myMap.set("b", 40);
myMap.set("c", 50);

console.log(myMap);

myMap.get("Value of key a: ", "a");
myMap.forEach((evey) => console.log(evey));
// u can also used console.log(myMap.values());  choice.

console.log("\nCheck a key: ", myMap.has("a")); // hap(key),check only key
console.log("Check f key: ", myMap.has("f")); // hap(key),check only key

myMap.delete("a");
// map Iterator
console.log("\n", myMap.values());

// map entries
console.log(myMap.entries());

console.log("\nSize of myMap Map: ", myMap.size);
myMap.clear(); //clear all elements of myMap Map
console.log("After Clear applyed, Size of myMap Map: ", myMap.size);

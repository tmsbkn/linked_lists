import LinkedList from "./modules/LinkedList.js";

const list = new LinkedList();

console.log(list.head(), list.tail());

list.append("Amy");
list.append("Ruth");
list.append("Samuel");

list.prepend("Rachel");
list.printList();
console.log("Size is:", list.size());
console.log("The head is", list.head(), "with", list.tail(), "in the tail");

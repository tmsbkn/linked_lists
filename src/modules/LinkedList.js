import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.headNode = null;
  }
  append(value) {
    const newNode = new Node(value);
    if (!this.headNode) {
      this.headNode = newNode;
      return;
    }
    let current = this.headNode;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  prepend(value) {
    const newNode = new Node(value);
    if (!this.headNode) {
      this.headNode = newNode;
      return;
    }
    newNode.next = this.headNode;
    this.headNode = newNode;
  }

  size() {
    let current = this.headNode;
    let size;
    if (!this.headNode) {
      size = 0;
    } else {
      size = 1;
    }
    while (current.next) {
      current = current.next;
      size = size + 1;
    }
    return size;
  }
  printList() {
    let current = this.headNode;
    let result = "";
    while (current) {
      result += current.value + "->";
      current = current.next;
    }
    console.log(result + "null");
  }
  head() {
    return this.headNode ? this.headNode.value : undefined;
  }
  tail() {
    if (!this.headNode) {
      return undefined;
    }
    let result;
    let tail = this.headNode;
    while (tail.next) {
      tail = tail.next;
    }
    result = tail.value;
    return result;
  }
  at(index) {
    if (index < 0) {
      return undefined;
    }

    let current = this.headNode;
    let i = 0;

    while (current && i < index) {
      current = current.next;
      i++;
    }
    return current ? current.value : undefined;
  }

  pop() {
    if (!this.headNode) {
      return undefined;
    }
    const output = structuredClone(this.headNode.value);
    this.headNode = this.headNode.next;
    return output;
  }
}

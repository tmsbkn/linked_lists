import Node from "./node";

export default class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    const newNode = new Node(value);
  }
}

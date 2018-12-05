export default class Node {
  constructor(tuple) {
    this.value = tuple;
    this.next = this.prev = null;
  }
};

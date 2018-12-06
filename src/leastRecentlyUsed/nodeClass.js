export default class Node {
  constructor(key) {
    this.value = key;
    this.next = this.prev = null;
  }
};

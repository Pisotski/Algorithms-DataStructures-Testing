import Node from './nodeClass';

export default class LRUCache {
  constructor(capacity) {
    this.heap = [];
    this.max = capacity;
    this.current = 0;
    this.hash = {};
  }
  
  get(key) {

    if( typeof key !== 'number') {
      return 'cache can only accept number values';
    };

    if( this.hash.hasOwnProperty(key) ) {
      this.prioritize(key)
      return this.hash[key];
    }
    return -1;
  };
  
  put(key, value) {

    if( typeof key !== 'number' && typeof value !== 'number' ) {
      return 'cache can only accept number values';
    };

    var node = new Node([key, value]);
      this.current += 1;
      if( this.max < this.current ) {
        this.delMin();
      
    }
    return;
  };

  rebalance() {

  }

  delMin() {
    this.current -= 1;
  };
  
  size() {
    return this.current;
  };

  clear() {
    this.head = null;
    this.tail = null;
    this.current = 0;
    this.hash = {};
  };
};
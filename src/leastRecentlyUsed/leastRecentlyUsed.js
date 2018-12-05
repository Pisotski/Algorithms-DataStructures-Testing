import Node from './nodeClass';

export default class LRUCache {
  constructor(capacity) {
    this.head = null;
    this.tail = null;
    this.max = capacity;
    this.current = 0;
    this.hash = {};
  }
  
  get(key) {

    if( typeof key !== 'number') {
      return 'cache can only accept number values';
    };

    if( this.hash.hasOwnProperty(key) ) {
      if( this.size() > 1 ) {
        this.update(key);
      }
      return this.hash[key];
    }
    return -1;
  };
  
  put(key, value) {

    if( typeof key !== 'number' && typeof value !== 'number' ) {
      return 'cache can only accept number values';
    };

    var node;
    if(this.hash.hasOwnProperty(key)) {
    this.update(key);
    } else {
        node = new Node([key, value]);
        this.hash[key] = value;
        if(this.head !== null) {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }
        this.current += 1;
        this.checkHead();
    }
    return;
  };

  detache(node, key) {
    if(node === null && head === null) {
        return `something went wrong`
    };
    if(node.value[0] !== key) {
      return this.detache(node.next, key);
    } else {
        if(node === this.head) {
            this.head = this.head.next;
            this.head.prev = null;
        } else {
            node.prev.next = node.next;
        }
        console.log(`node detached `, node);
        return node;
    };
  };

  update(key) {
    var node = this.detache(this.head, key);
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = this.tail.next;
    this.tail.next = null;
    return `new tail is ${this.tail.value[0]}`;
  };

  removeHead() {
    var key = this.head.value[0];
    this.head = this.head.next;
    this.head.prev = null;
    delete this.hash[key];
    this.current -= 1;
    return `head removed ${key}`;
  };

  checkHead() {
    return this.max < this.current ? this.removeHead() : `head is ${this.head}`;
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

// ********************* ES 5 classes
// var Node = function(tuple) {
//   this.value = tuple;
//   this.next = this.prev = null;
// }

// var LRUCache = function(capacity) {
//   this.head = null;
//   this.tail = null;
//   this.max = capacity;
//   this.current = 0;
//   this.hash = {};
// };

// LRUCache.prototype.get = function(key) {
//   if (this.hash[key]) {
//       this.update(key);
//       return this.hash[key]
//   }
//   return -1;
// };

// LRUCache.prototype.detache = function(node, key) {
//   if(node === null) {
//       return `something went wrong`
//   }
//   if(node.value[0] !== key) {
//      return this.detache(node.next, key);
//   } else {
//       if(node === this.head) {
//           this.head = this.head.next;
//           this.head.prev = null;
//       } else {
//           node.prev.next = node.next;
//       }
//       console.log(`node detached `, node);
//       return node;
//   };
// };

// LRUCache.prototype.update = function(key) {
//   var node = this.detache(this.head, key);
//   node.prev = this.tail;
//   this.tail.next = node;
//   this.tail = this.tail.next;
//   this.tail.next = null;
//   return `new tail is ${this.tail.value[0]}`;
// }

// LRUCache.prototype.removeHead = function() {
//   var key = this.head.value[0];
//   this.head = this.head.next;
//   this.head.prev = null;
//   delete this.hash[key];
//   this.current -= 1;
//   return `head removed ${key}`;
// }

// LRUCache.prototype.put = function(key, value) {
//   var node;
//   if(this.hash.hasOwnProperty(key)) {
//   this.update(key);
//   } else {
//       node = new Node([key, value]);
//       this.hash[key] = value;
//       if(this.head !== null) {
//           node.prev = this.tail;
//           this.tail.next = node;
//           this.tail = node;
//       } else {
//           this.head = node;
//           this.tail = node;
//       }
//       this.current += 1;
//       this.checkHead();
//   }
//   return;
// };

// LRUCache.prototype.checkHead = function() {
//   return this.max < this.current ? this.removeHead() : `head is ${this.head.value[0]}`;
// };

// LRUCache.prototype.size = function() {
//   return this.current;
// }
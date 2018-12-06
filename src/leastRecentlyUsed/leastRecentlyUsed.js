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

    if( typeof key !== 'number' || typeof value !== 'number' ) {
      return;
    };

    const node = new Node(key);
    if(!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      if( this.hash.hasOwnProperty(key) ) {
        this.hash[key] = value;
        if( this.size() > 1 ) {
          this.update(key);
        }
        return;
      } else {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
      }
    }
    
    this.hash[key] = value;
    this.current += 1;
    this.checkHead();
    return;
  };
  
  update(key) {
    if( this.tail && this.tail.value === key ) {
      return;
    }
    
    const node = this.detache(key);
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = this.tail.next;
    this.tail.next = null;
    return `new tail is ${this.tail.value}`;
  };
  
  detache(key) {
    if(this.head.value === key) {
      const node = this.head;
      const newHead = this.head.next;
      this.head = newHead;
      this.head.prev = null;
      return node;
    } else {
        let node = this.head.next;
        while(node) {
          const nextNode = node.next;
          if(node.value === key) {
            const prevNode = node.prev;
            nextNode.prev = prevNode;
            prevNode.next = nextNode;
            node.prev = null;
            node.next = null;
            return node;
          }
          node = nextNode;
      }
    }
  };
  
  removeHead() {
    const key = this.head.value;
    const newHead = this.head.next
    this.head = newHead;
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

  headToTail() {
    const headQueue = [];
    let node = this.head;
    while( node ) {
      headQueue.push(node.value);
      const next = node.next;
      node = next;
    }
    return headQueue;
  };

  tailToHead() {
    const tailQueue = [];
    let node = this.tail;
    while( node ) {
      tailQueue.push(node.value);
      const prev = node.prev;
      node = prev;
    }
    return tailQueue;
  };
  
  check() {
    return this;
  };
};

// ********************* ES 5 classes
// var Node = function(key) {
//   this.value = key;
//   this.next = this.prev = null;
// };

// var LRUCache = function(capacity) {
// this.head = null;
// this.tail = null;
// this.max = capacity;
// this.current = 0;
// this.hash = {};
// };

// LRUCache.prototype.get = function(key) {

//   if( typeof key !== 'number') {
//     return 'cache can only accept number values';
//   };

//   if( this.hash.hasOwnProperty(key) ) {
//     if( this.size() > 1 ) {
//       this.update(key);
//     }
//     return this.hash[key];
//   }
//   return -1;
// };

// LRUCache.prototype.put = function(key, value) {

//   if( typeof key !== 'number' || typeof value !== 'number' || this.hash.hasOwnProperty(key) ) {
//     return;
//   };

//   const node = new Node(key);
//   if(!this.head) {
//     this.head = node;
//     this.tail = node;
//   } else {
//     if( this.hash.hasOwnProperty(key) ) {
//       if( this.size() > 1 ) {
//         this.update(key);
//       }
//     } else {
//       node.prev = this.tail;
//       this.tail.next = node;
//       this.tail = node;
//     }
//   }
//   this.hash[key] = value;
//   this.current += 1;
//   this.checkHead();
//   return;
// };

// LRUCache.prototype.update = function(key) {
//   if( this.tail && this.tail.value === key ) {
//     return;
//   }
  
//   const node = this.detache(key);
//   node.prev = this.tail;
//   this.tail.next = node;
//   this.tail = this.tail.next;
//   this.tail.next = null;
//   return `new tail is ${this.tail.value}`;
// };

// LRUCache.prototype.detache = function(key) {
//   if(this.head.value === key) {
//     const node = this.head;
//     const newHead = this.head.next;
//     this.head = newHead;
//     this.head.prev = null;
//     return node;
//   } else {
//       let node = this.head.next;
//       while(node) {
//         const nextNode = node.next;
//         if(node.value === key) {
//           const prevNode = node.prev;
//           nextNode.prev = prevNode;
//           prevNode.next = nextNode;
//           node.prev = null;
//           node.next = null;
//           return node;
//         }
//         node = nextNode;
//     }
//   }
// };

// LRUCache.prototype.removeHead = function() {
//   const key = this.head.value;
//   const newHead = this.head.next
//   this.head = newHead;
//   this.head.prev = null;
//   delete this.hash[key];
//   this.current -= 1;
//   return `head removed ${key}`;
// };

// LRUCache.prototype.checkHead = function() {
//   return this.max < this.current ? this.removeHead() : `head is ${this.head}`;
// };

// LRUCache.prototype.size = function() {
//   return this.current;
// };

// LRUCache.prototype.headToTail = function() {
// var headQueue = [];
// var node = this.head;
// while( node ) {
//   headQueue.push(node.value);
//   var next = node.next;
//   node = next;
// }
// return headQueue;
// };

// LRUCache.prototype.tailToHead = function() {
// var tailQueue = [];
// var node = this.tail;
// while( node ) {
//   tailQueue.push(node.value);
//   var prev = node.prev;
//   node = prev;
// }
// return tailQueue;
// };
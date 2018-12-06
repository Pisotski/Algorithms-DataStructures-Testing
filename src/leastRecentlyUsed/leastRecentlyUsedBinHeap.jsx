// import Node from './nodeClass';
// import LRUCache from './leastRecentlyUsedBinHeap';

// // jest.mock('./nodeClass');

// // it('LRUCache should call node constructor', () => {
// //   const cache = new LRUCache();
// //   cache.put([1, 1]);
// //   expect(Node).toHaveBeenCalledTimes(1);
// // });

// test('should create a node', () => {
//   const node = new Node([1, 1]);
//   expect(node).toEqual({value: [1, 1], prev: null, next: null});
// });

// describe('cache', () => {
//   const cache = new LRUCache(2);

//   test('should create a cache', () => {
//     expect(cache).toHaveProperty('head', 'tail', 'max', 'current', 'hash');
//   });

//   test('put method should update size', () => {
//     cache.put(1, 1);
//     expect(cache.size()).toBe(1);
//     cache.put(2, 2);
//     expect(cache.size()).toBe(2);
//   });

//   test('put method properly update ther size cache is on limit', () => {
//     cache.put(3, 3);
//     expect(cache.size()).toBe(2);
//     cache.put(4, 4);
//     expect(cache.size()).toBe(2);
//   });

//   test('clear method should unload cache', () => {
//     cache.clear();
//     expect(cache.head).toBe(null);
//     expect(cache.tail).toBe(null);
//     expect(cache.current).toBe(0);
//     expect(cache.hash).toEqual({});
//   })

//   test('get method should retrieve data from cache', () => {
//     cache.clear();
//     cache.put(1, 1);
//     expect(cache.get(1)).toBe(1);
//     expect(cache.get(2)).toBe(-1);
//     cache.put(2, 2);
//     expect(cache.get(1)).toBe(1);
//     expect(cache.get(2)).toBe(2);
//   })

//   test('get method should erase head if cache has reached its limit', () => {
//     cache.clear();
//     cache.put(1, 1);
//     cache.put(2, 2);
//     cache.put(3, 3);
//     expect(cache.get(1)).toBe(-1);
//     expect(cache.get(2)).toBe(2);
//     expect(cache.get(3)).toBe(3);
//   })
// });

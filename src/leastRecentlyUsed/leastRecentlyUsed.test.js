import Node from './nodeClass';
import LRUCache from './leastRecentlyUsed';

// jest.mock('./nodeClass');

// it('LRUCache should call node constructor', () => {
//   const cache = new LRUCache();
//   cache.put([1, 1]);
//   expect(Node).toHaveBeenCalledTimes(1);
// });

test('should create a node', () => {
  const node = new Node([1, 1]);
  expect(node).toEqual({value: [1, 1], prev: null, next: null});
});

describe('cache', () => {
  let cache = new LRUCache(2);

  test('should create a cache', () => {
    expect(cache).toHaveProperty('head', 'tail', 'max', 'current', 'hash');
  });

  test('put method should update size', () => {
    cache.put(1, 1);
    expect(cache.size()).toBe(1);
    cache.put(2, 2);
    expect(cache.size()).toBe(2);
  });

  test('put method properly update size when cache is on limit', () => {
    cache.put(3, 3);
    expect(cache.size()).toBe(2);
    cache.put(4, 4);
    expect(cache.size()).toBe(2);
  });

  test('clear method should unload cache', () => {
    cache.clear();
    expect(cache.head).toBe(null);
    expect(cache.tail).toBe(null);
    expect(cache.current).toBe(0);
    expect(cache.hash).toEqual({});
  })

  test('get method should retrieve data from cache', () => {
    cache.clear();
    cache.put(1, 1);
    expect(cache.get(1)).toBe(1);
    expect(cache.get(2)).toBe(-1);
    cache.put(2, 2);
    expect(cache.get(1)).toBe(1);
    expect(cache.get(2)).toBe(2);
  })

  test('get method should erase head if cache has reached its limit', () => {
    cache.clear();
    cache.put(1, 1);
    cache.put(2, 2);
    cache.put(3, 3);
    expect(cache.get(1)).toBe(-1);
    expect(cache.get(2)).toBe(2);
    expect(cache.get(3)).toBe(3);
  })

  test('testing leetcode input 0', () => {
    cache.clear();
    cache.put(1, 1);
    cache.put(2, 2);
    expect(cache.get(1)).toBe(1);
    cache.put(3, 3);
    expect(cache.get(2)).toBe(-1);
    cache.put(4, 4);
    expect(cache.get(1)).toBe(-1);
    expect(cache.get(3)).toBe(3);
    expect(cache.get(4)).toBe(4);
  });
  
  test('testing leetcode input 1', () => {
    cache.clear();
    cache.put(1, 1);
    cache.put(2, 2);
    expect(cache.get(1)).toBe(1);
    cache.put(3, 3);    // evicts key 2
    expect(cache.get(2)).toBe(-1)
    cache.put(4, 4);    // evicts key 1
    expect(cache.get(1)).toBe(-1)
    expect(cache.get(3)).toBe(3)
    expect(cache.get(4)).toBe(4)
  });

  test('testing leetcode input 2', () => {
    cache.clear();
    expect(cache.get(2)).toBe(-1);
    cache.put(2, 6);
    expect(cache.get(1)).toBe(-1);
    cache.put(1, 5);
    cache.put(1, 2);
    expect(cache.get(1)).toBe(2);
    expect(cache.get(2)).toBe(6);
  });

  test('testing leetcode input 3', () => {
    cache.clear();
    cache.put(2, 1);
    cache.put(2, 2);
    expect(cache.get(2)).toBe(2);
    cache.put(1, 1);
    cache.put(4, 1);
    expect(cache.get(2)).toBe(-1);
  });

  test('testing leetcode input 4', () => {
    cache = new LRUCache(10);
    cache.put(10, 13);
    cache.put(3, 17);
    cache.put(6, 11);
    cache.put(10, 5);
    cache.put(9, 10);
    expect(cache.get(13)).toBe(-1);
    cache.put(2, 19);
    expect(cache.get(2)).toBe(19);
    expect(cache.get(3)).toBe(17);
    expect(cache.tail.value).toBe(3);
    expect(cache.head.next.value).toBe(10);
    cache.put(5, 25);
    expect(cache.get(8)).toBe(-1);
    expect(cache.tail.value).toBe(5);
    expect(cache.head.next.next.value).toBe(9);
    expect(cache.size()).toBe(6);
    cache.put(9, 22);
    cache.put(5, 5);
    cache.put(1, 30);
    expect(cache.get(11)).toBe(-1);
    expect(cache.size()).toBe(7);
    expect(cache.get(5)).toBe(5);
    expect(cache.tail.value).toBe(5);
    expect(cache.get(8)).toBe(-1);
    expect(cache.get(9)).toBe(22);
    cache.put(4, 30);
    cache.put(9, 3);
    expect(cache.get(9)).toBe(3);
    expect(cache.get(10)).toBe(5);
    expect(cache.head.value).toBe(6)
    expect(cache.get(10)).toBe(5);
    expect(cache.tail.value).toBe(10)
    cache.put(6, 14);
    cache.put(3, 1);
    expect(cache.get(3)).toBe(1);
    expect(cache.size()).toBe(8);
    cache.put(10, 11);
    expect(cache.get(8)).toBe(-1);
    cache.put(2, 14);
    expect(cache.get(1)).toBe(30);
    expect(cache.get(5)).toBe(5);
    expect(cache.get(4)).toBe(30);
    cache.put(11, 4);
    cache.put(12, 24);
    cache.put(5, 18);
    expect(cache.get(13)).toBe(-1);
    expect(cache.get(5)).toBe(18);
    expect(cache.size()).toBe(10);
  });
});

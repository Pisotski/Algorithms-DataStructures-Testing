import { BinarySearchTree, Node } from './bst';

describe ('Node', () => {
  const node = new Node(3);
  test ('should create node', () => {
    expect(node.data).toEqual(3);
  })

  test ('should create node with left and right with value of null', () => {
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  })
  test ('should add to the left', () => {
    node.left = 1;
    expect(node.left).toBe(1);
  })
  test ('should add to the right', () => {
    node.right = 2;
    expect(node.right).toBe(2);
  })
  test ('should clear left and right', () => {
    node.clear();
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  })
});

describe ('Binary Search Tree', () => {
  const tree = new BinarySearchTree();
  const node20 = new Node(20); 
  tree.add(node20);
  test('tree should exist', () => {
    expect(tree).toBeDefined();
  })
  test('tree root should be 20', () => {
    expect(tree.root.data).toBe(20);
  })
  const node30 = new Node(30);
  const node10 = new Node(10);
  tree.add(node10);
  tree.add(node30);
  test('should add smaller node to left branch', () => {
    expect(tree.root.left.data).toBe(10);
  })
  test('should add larger node to right branch', () => {
    expect(tree.root.right.data).toBe(30);
  })
  const node301 = new Node(30);
  const node101 = new Node(10);
  // tree.add(node301);
  // test('should add equal node to correct branch', () => {
  //   expect(tree.root.right.left.data).toBe(30);
  //   expect(tree.root.left.right.data).toBe(10);
  // })
});
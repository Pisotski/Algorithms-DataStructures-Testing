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

let tree;
beforeEach(() => {
  tree = new BinarySearchTree();
  const node20 = new Node(20); 
  tree.add(node20);
})
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
  test('should add node to left branch', () => {
    const node30 = new Node(30);
    const node10 = new Node(10);
    tree.add(node10);
    tree.add(node30);
    expect(tree.root.left.data).toBe(10);
    expect(tree.root.right.data).toBe(30);
  })
  test('should add equal nodes to correct branch', () => {
    const node30 = new Node(30);
    const node10 = new Node(10);
    tree.add(node10);
    tree.add(node10);
    tree.add(node30);
    tree.add(node30);
    expect(tree.root.left.left.data).toBe(10);
    expect(tree.root.left.right).toBeNull();
    expect(tree.root.right.left).toBeNull();
    expect(tree.root.right.right.data).toBe(30);
  })
});
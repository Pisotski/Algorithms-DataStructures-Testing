export class BinarySearchTree {
  constructor(){
    this.root = null;    
  }
  add( child, parent = this.root ){
    if ( !this.root ) {
      this.root = child;
      return;
    }
    if ( parent.data > child.data ) {
      // parent 9 greater than child 7
      // 
      if ( !parent.left ) {
        parent.left = child
      } else {
        this.add ( child, parent.left )
      }
      return;
    }
    if ( parent.data < child.data ) {
      // parent 9 smaler than child 10
      // 
      if ( !parent.right ) {
        parent.right = child
      } else {
        this.add ( child, parent.right )
      }
      return;
    }
    if ( parent.data === child.data ) {
      if ( parent.right === child.data ) {
        this.add ( child, parent.right );
      }
      if ( parent.right < child.data ) {
        const cleanNode = this.swap(parent.right, child)
        this.add ( cleanNode, parent.right );
      }
      return;
    }
  }
  swap( node1, node2) {
    const node = node1;
    node2.left = node.left;
    node2.right = node.right;
    node1.right = node2;
    node.clear();
    return node;
  }
}

export class Node {
  constructor( n ) {
    this.data = n;
    this.left = null;
    this.right = null;
  }
  clear() {
    this.left = null;
    this.right = null;
  }
}
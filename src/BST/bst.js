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
      if ( !parent.left ) {
        parent.left = child
      } else {
        this.add ( child, parent.left )
      }
      return;
    }
    if ( parent.data < child.data ) {
      if ( !parent.right ) {
        parent.right = child
      } else {
        this.add ( child, parent.right )
      }
      return;
    }
    if ( parent.data === child.data ) {
      if( child.data >= this.root.data ) {
        if( !parent.right ) {
          parent.right = child;
        } else {
          this.add( parent.right, child );
        }
      } else {
        if( !parent.left ) {
          parent.left = child;
        } else {
          this.add( parent.left, child );
        }
      }
      return;
    }
  }
  delete(data) {

  }
}

   10
  5 20
  15 25
  13 16 23 26
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
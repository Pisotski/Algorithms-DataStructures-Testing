{

    "use strict"

    //create BST
    
    const BST = class {
        constructor(array) {
            this.initBST(array)
        }

        //implement preOrder
        
          //add node should start with the root and 
         //determine where the node belongs to
        //according to BST properties

        swap (node1, node2) {

            let archived = node1.value;
            node1.value = node2.value;
            node2.value = archived;

            return {
                
                node1,
                node2,
            }
        }
        
        //iterate through the tree
        //if nodes' value is greated than its parent
        //store it on the left otherwise to the right     
        addNode (parent, node) {

            //BST should have no duplicate values
            if (parent.value === node.value) {
                console.log(`duplicate value ${nodeVal} and ${parentVal}`);
                return;
            }
            
            //if parent is greater than node
            //node tries to add itself to the left
                //if left is already taken
                //node is trying to add itself to parents left
        
            if (parent.value > node.value) {
                
                if (!parent.left) { parent.left = node }                    
                else { return this.addNode(parent.left, node) }
                
            } else {
                
                if (!parent.right) { parent.right = node }
                else { return this.addNode(parent.right, node) }
            }
            
            return;
        }

        createNode (el) {

            let node = {
                value: el,
                left: null,
                right: null,
            }
            return node;
        }
        //init tree should create a BST from the array
        initBST(array) {

            //iterate through the array
            this.root = this.createNode(array[0]);
            
            for (let i = 1; i < array.length; i = i + 1) {
                let el = array[i];
                this.addNode(this.root, this.createNode(el));
            }
            //for each element create a node
            //add each node to the tree
            console.log(`tree initialized`)
        }
        
        preOrder () {

        }

        deleteNode() {
            
        }
       //delete node should find an element and
      //delete is replacing the delete node with the correct one of its children
     //the missing child also has to be replace
    }

    //implement preOrder
    //implement postOrder
    //implement inOrder
    //implement levelOrder


    //balance tree should toss the nodes
    //so the number of nodes on the right side of the tree
    //be equal or (+-1 node) to the number of nodes on the left


    let birch = new BST([61,13,34,120,55,311,45,39,18,11,2,6,23,27,98,5,66]);
    // let birch = new BST([6]);
    // let n = [1,3,4,9,8]
    // for (let i = 0; i < n.length; i = i + 1 ){
    //     let node = birch.createNode(n[i])
    //     birch.addNode(node)
    // }
    console.log(birch)
}
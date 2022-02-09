
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

        addNode (node, parent = this.root) {

            //iterate through the tree
            //if nodes' value is greated than its parent
            //store it on the left otherwise to the right
            let nodeVal = node.value;
            let parentVal = parent.value;

            //BST should have no duplicate
            if (parentVal === nodeVal) {
                console.log(`duplicate value ${nodeVal} and ${parentVal}`);
                return;
            }

            //if parent already has a child on the place
            //if nodes value is smaller swap with the left node and pass the left node to addNode
            //if nodes value is bigger swap with the right node and pass the right node to addNode
            
            let newParent;
            let swap = function() {
                node.value = parentVal;
                parent.value = nodeVal;                
            }
            
            if (parentVal > nodeVal) {
                
                newParent = parent.left
                if (!parent.left) { parent.left = node;
                    return;
                } else if ( parent !==this.root ) {
                    swap();
                }
            } else {

                newParent = parent.right
                if (!parent.right) { parent.right = node;
                    return;
                } else if ( parent !==this.root ) {
                    swap();
                }
             }
            
            this.addNode(node, newParent);
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
            console.log(`root created`)
            
            for (let i = 1; i < array.length; i = i + 1) {
                let el = array[i];
                this.addNode(this.createNode(el));
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


//     let birch = new BST([6,1,1,3,10,7,2,9,4,0]);
    let birch = new BST([6,1,1,3,10,7]);

}

export default BST

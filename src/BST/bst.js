{

    "use strict"

    //create BST
    
    const BST = class {
        constructor(array) {
            this.initBST(array)
        }

        //implement preOrder

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
        
        search (node, value) {
            //search function takes value and returnes the corresponding node
            if(!node) {
                console.log(`there is no node with value ${value}`);
                return;
            }
            if (node.value === value) {
                console.log(`here you go`);
                console.log(node)
                return node
            }
            
            return node.value > value ? this.search(node.left, value) : this.search(node.right, value)
        }

        deleteNode(value) {
            //takes value
            //searches for node
            //when found deletes node
// TODO: determine which branch to delete by serching the depths of two branches

            //detach left branch
            //replaces deleted node itself with the right branch
            //attach detached branch to the right branch
            
            //returns deleted node 
        }
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
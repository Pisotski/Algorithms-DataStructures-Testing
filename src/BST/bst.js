{

    "use strict"

    //create BST

    const BST = class {
        constructor(array) {
            this.initBST(array)
        }

        //implement preOrder

        swap(node1, node2) {

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
        addNode(parent, node) {

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

                if (!parent.left) {
                    parent.left = node
                } else {
                    return this.addNode(parent.left, node)
                }

            } else {

                if (!parent.right) {
                    parent.right = node
                } else {
                    return this.addNode(parent.right, node)
                }
            }

            return;
        }

        createNode(el) {

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

        search(node, value) {
            //search function takes value and returnes the corresponding node
            if (!node) {
                return;
            }
            if (node.value === value) {
                return node
            }

            return node.value > value ? this.search(node.left, value) : this.search(node.right, value)
        }

        deleteNode(value) {
            //takes value
            //searches for node
            let toBeDeleted = this.search(this.root, value);

            if (!toBeDeleted) { return };

            let deletedValue = toBeDeleted.value;

            //when found deletes node
            // TODO: find the branch to be deleted. compare the depthss of two branches
            //detach left branch
            //replaces deleted node itself with the right branch
            //attach detached branch to the right branch
            let detached;
            if (toBeDeleted.right) {

                detached = toBeDeleted.left;
                Object.assign(toBeDeleted, toBeDeleted.right);
                this.addNode(toBeDeleted, detached)
            } else {

                Object.assign(toBeDeleted, toBeDeleted.left);
            }

            console.log(`node ${value} erased`);
            return;
        }

        //implement preOrder
        preOrder(node = this.root) {
            //should visit the node, push it's value into collection,

            if (!node) { return [] }

            return [node.value].concat(this.preOrder(node.left)).concat(this.preOrder(node.right));
        }

        inOrder(node = this.root) {

            if (!node) { return [] }

            return this.inOrder(node.left).concat(node.value).concat(this.inOrder(node.right));
        }

        postOrder(node = this.root) {

            if (!node) { return [] }

            return this.postOrder(node.left).concat(this.postOrder(node.right)).concat(node.value);
        }

        findHeight(node = this.root) {

            if (!node) {
                return -1;
            }

            let leftSideHeight = this.findHeight(node.left) + 1;
            let rightSideHeight = this.findHeight(node.right) + 1;

            if (leftSideHeight > rightSideHeight) {
                return leftSideHeight;
            } else {
                return rightSideHeight;
            }
        }

        breadthFirst(node = this.root, height = this.findHeight()) {


            return collection;
        }
    }

    //balance tree should toss the nodes
    //so the number of nodes on the right side of the tree
    //be equal or (+-1 node) to the number of nodes on the left

    // let birch = new BST([61,13,34,120,55,311,45,39,18,11,2,6,23,27,98,5,66]);
    // let birch = new BST([25,15,10,22,18,50,35,44,70])
    // let birch = new BST([8, 15, 5, 3]);
    // let birch = new BST([9,6,5,7,16,10,12]);
    // let birch = new BST([9,6,5,8,10,7]);

    console.log(birch.breadthFirst());

    //12 5 7 10 6 16 9
}

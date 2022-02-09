{
    // create tree class. 

    "use strict"

    const Tree = class {

        constructor(root) {

            this.value = root;
            this.children = [];
            this.nodesCounter = 0;
        }

        // METHODS:
        // add branch,
        // to create a random branches/leaves every time
        yesNo() { return Math.random(0, 1) > 0.5 };

        // add node
        addNode(value, parent) {

            parent.children.push(
                {
                    value: value,
                    children: []
                }
            )
            return;
        }

        // method that determines randomly a parent for each node
        findPath(value, node = this) {

            let isTrue = this.yesNo();
            if ((isTrue || node.children.length < 1) && node.children.length < 4) {
                this.addNode(value, node);
                // console.log(`${value} added to the tree, it's parent ${node.value}`)
            } else {
                let newParent = node.children[Math.round(Math.random() * node.children.length)];
                this.findPath(value, newParent);
            }
            return;
        }

        // Delete node method
        // Recursive function that starts from the root 
        // than goes all the way to the bottom of the tree
        // and iterating through every leaf on the branch

        findNode(valueSearched, node = this, parent, indexOfChild) {

            if (node.value === valueSearched) {
                return {
                    parent: parent,
                    child: node,
                    indexOfChild: indexOfChild
                };
            }

            let l = node.children.length;
            for (let i = 0; i < l; i = i + 1) {

                //FIXME extra iteration is made after result found
                let result = this.findNode(valueSearched, node.children[i], node, i);
                if (result) {
                    console.log(`node found. parent value: ${result.parent.value}, node index: ${result.indexOfChild}`)
                    return result;
                }
            }
        }

        deleteNode(value) {

            //delete method deletes node with its children
            let deleteMeInfo = this.findNode(value);
            if (!deleteMeInfo) {
                console.log(`the node doesn't exist`)
                return
            }
            let parent = deleteMeInfo.parent;
            let deleteMeIndex = deleteMeInfo.indexOfChild;
            //FIX ME mutation here 
            let deleted = parent.children.splice(deleteMeIndex, 1)[0];
            //return parent.children.splice(deleteMeIndex, 1);
            return deleted;
        }

        // tosses elements in the array randomly
        // created a Tree 
        initTree(array) {
            // from the array create a tree.
            // Math Random the amount of chindren
            // the root is always the first number
            for (let i = 0; i < array.length; i = i + 1) {
                this.findPath(array[i]);
            }
            console.log(`tree completed`)
            return;
        }

        // Change node
        // the same as delete
        // with just assigning new value to the parents' child
        // findNode function is providing all the information 
    }

    let oak = new Tree(1);
    let treeValues = [13, 4, 6, 96, 14, 62, 7, 95, 0, 49, 33, 8, 3];

    oak.initTree(treeValues); // tree created

    oak.deleteNode(96); // node deleted
    oak.deleteNode(96); // node not found

}

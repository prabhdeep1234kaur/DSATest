//find sum of all values of tree from root as the input : 15
//using O(n)
class Node{
    
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}    

function findSum(root){
    if (root == null){
        return 0;
    } // empty tree
    
    return root.data + findSum(root.right) + findSum(root.left);
    
}

myNode1 = new Node(1);
myNode2 = new Node(2);
myNode4 = new Node(4);
myNode5 = new Node(5);
myNode3 = new Node(3);

myNode1.left = myNode2;
myNode1.right = myNode3;

myNode2.left = myNode4;
myNode2.right = myNode5;

console.log("hi"+findSum(myNode4));
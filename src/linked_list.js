//MANUALLY
class Node{
    constructor(givenData){
        this.dataa = givenData;
        var next = null;
    }
}

//CREATIN DATA
nodeA = new Node(4);
nodeB = new Node(6);
nodeC = new Node(8);
nodeD = new Node(2);

//MANUALLY
nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;



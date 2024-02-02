class TestNode{
    constructor(givenData){
        this.dataa = givenData;
        this.next = null;
    }

    countNodes(head){
        //head != null
        var count = 1; //how many nodes we have seen so far
        var current = head; //which node we are at : start with head //left to right
        while(current.next !== null){
            current = current.next;
            count ++;
        }
        return count;
    }
}

//CREATIN DATA
nodeA = new TestNode(4);
nodeB = new TestNode(6);
nodeC = new TestNode(8);
nodeD = new TestNode(2);


nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;

console.log(nodeA.countNodes(nodeD));


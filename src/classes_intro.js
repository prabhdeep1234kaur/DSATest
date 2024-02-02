class Robot{
    constructor(n, w, c){ //defining the object
        this.name = n;
        this.weight = w;
        this.color = c;   
        this.lookingAt = null; //multiple robots 
    }
    // createMyRobot(n, w, c){
    //     this.name = n;
    //     this.weight = w;
    //     this.color = c;        
    // } : not needed

    getMyRobot(){
       
        return `My Robot is ${this.name} and my color is ${this.color} I weigh ${this.weight}kgs`;
    }
}


class Person{
    constructor(n,p,s){
        this.name = n; 
        this.personality = p; 
        this.isSitting = s;
        this.robotOwned = null;
    }
    sitDown(){
        this.isSitting = true;
    }

    standUp(){
        this.isSitting = false;
    }
}


//Class ROBOT
// const robotTom = new Robot();
// const robotJerry = new Robot();

// robotTom.createMyRobot('Tom', 10, 'Red');
// robotJerry.createMyRobot('Jerry', 12, 'Blue');  : not needed because we have construct
//as we have defined constructor : we can pass it directly
const robotTom = new Robot('Tom', 10, 'Red');
const robotJerry = new Robot('Jerry', 12, 'Blue');
const robotOlive = new Robot('Olive', 6, 'Pink');
const robotJhonny = new Robot('Jhonny', 30, 'Black');


console.log(robotTom.getMyRobot());
console.log(robotJerry.getMyRobot());


// Class PERSON
const personTia = new Person("Tia", "Sweet",false);
const personNadar = new Person("Nadar", "Intelligent",true);

//CLASS PERSON INTERACTING WITH CLASS ROBOT
personTia.robotOwned = robotTom;
personNadar.robotOwned = robotJerry;

//GETTING OBJECTS FROM PERSON
console.log(personTia.robotOwned.getMyRobot());


///CLASS INTERACTING WITH ITS OWN OBJECT
robotJhonny.lookingAt = robotOlive;
robotTom.lookingAt = robotJerry;


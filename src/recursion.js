function fact(n){
    //assuming n is + or > 0
    if(n >= 1){
        return n * fact(n-1); //calling itself
    }else{
        return 1;
    }
}

console.log(fact(3));


/*
fact = 0 : returns 1
fact = 1 : goes inside if :  1 * fact(0) : 1*1; bcoz : fact(0) = 1
fact = 4 : goes inside if : 4 * fact(3) : calls fact(3)  : calls fact(2) : calls fact(1)
*/ 


//fibonacci sequence recursion
//find the no. from the positiob we enter
//1 1 2 3 5 8 13 : 1+1, 1+2 , 2+3, 3+5, 5+8
/*
fibo num = position it is at : 
1 = 1
1 = 2
2 = 3
3 = 4
5 = 5
13 = 6
*/

function fibo(n){

     if(n >2){ //anything in the series starting 
        return fibo(n-1)+ fibo(n-2);
     }else {
        return 1;
     }
}

console.log(fibo(3));


///find no. of jump / ways a frog can make


function frogJump(currentStone ){
    
    if(currentStone >= 11){
        return 1; //base case : no 2 feet jump only 1 foot jump
    }
    let ways = 0;
    if(currentStone + 1 <= 11){
        ways +=  frogJump(currentStone + 1);
    }
    if(currentStone + 2 <= 11){
        ways +=  frogJump(currentStone + 2);
    }
    return ways;
}
console.log("ways : "+frogJump(10));
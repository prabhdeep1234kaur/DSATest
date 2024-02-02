
array_1d = [1,2,3,4,5,3,2,3,5,5,2,,3,6,5,6,];


array_2d = [
    [1,2,3,4],
    [2,3,4,5],
    [4,2.5,2]
]; // n no. of rows and n no. of columns =  n2 : 

array_2d_2 = [
    [1,2,3,4],
    [2,3,4,5],
    [4,2.5,2],
    [9,2.5,2]
];// n no. of rows and n no. of columns =  n2 : 


//find Sum of 2 d array
function findSum2D(){
    let sum = 0;
    for(let i=0;  i < array_2d.length;i++){
        for(let j = 0; j < array_2d[i].length; j++){
            sum +=array_2d[i][j];
        }
    }
}
const arr = [-2, 3, 4, 7, 8, 9, 11, 13]; 
//////////////0, 1, 2, 3, 4, 5,  6,   7

//define left and right pointer
function searchTarget(arr, target){
    var left = 0;
    var right = arr.length;
    while (left <= right){
        var mid = Math.round((left + right)/2); //find the mid value : approx 3rd index
        if(arr[mid] === target){
            return mid;
        }else if(target > arr[mid]){
            left = mid+1; //moves towards right

        }else{
            right = mid-1; //moves towards left
        }
    }
    return -1+" Element Does not exist";
}

console.log(searchTarget(arr, 1));

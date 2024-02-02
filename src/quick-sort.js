console.log("hi");
myarr = [3,-2,-1,0,2,4,1];

//left : 3; right: 1

//find partition
function partition(arr, l, r){
    pivot = arr[r]; //last elememt of the arr : 0
    i = l-1;
    //j : current no, so lets put it on the very first element 
    for (let j = l; j < r; j++) {
        if (arr[j] < pivot) {
            i += 1;
            //swap arr[i] and arr[j]
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    //swap arr[i+1] and arr[r] to put the pivot element in its correct position
    const temp = arr[i + 1]; 
    arr[i + 1] = arr[r];
    arr[r] = temp; 
    return i + 1;
}

function qs(arr, l, r) {
    if (l >= r) {
        return; //means the following
        /*
        either just one element
        or no element
        or already sort : l being on the fight side
        */
    }
    //fetch the partition index   
    const p = partition(arr, l, r);
    //sort of two sections now eg [-2 (being l), -1, 0 (p-1), 1 (p), 2(p+1), 4, 3 (being l)]
    qs(arr, l, p - 1);
    qs(arr, p + 1, r);
}


//just a function which has qs
function quicksort(arr) {
    qs(arr, 0, arr.length - 1);
}

quicksort(myarr);
console.log(myarr);


function arrayLastElementThree(arr,n){
    
    if(arr.length > 3){
        for(i = 0; i < n; i++){
            arr[arr.length] = arr[arr.length - 1] + arr[arr.length - 2] + arr[arr.length - 3];
        }
        return arr;
    }
}
console.log(arrayLastElementThree([0,1,2,3],6));
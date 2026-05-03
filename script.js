let arr=[3,6,2,7,8,10];

// Max element
let max=arr[0];
function findMax(array){
    let max=array[0];
    for(let i=0;i<array.length;i++){
        if(array[i]>max){
            max=array[i];
        }
    }
    return max;
}

//Sum
const findSum=(array) => {
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum=sum+array[i];
    }
    return sum;
}

//Odd numbers
const oddNum=function(array){
    let count=0;
    for(let i=0;i<array.length;i++){
        if((array[i]%2)!=0){
            count=count+1;
        }
    }
    return count;
}



console.log("Array:-",arr);
console.log("Maximum number:",findMax(arr));
console.log("Sum of all elements:",findSum(arr));
console.log("Count of odd numbers:",oddNum(arr));
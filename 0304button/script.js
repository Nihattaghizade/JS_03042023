let arr = [1,2,3,4,'html','css'];

let list = document.getElementById('list');

arr.forEach( item=> list.innerHTML += `<li> ${item}<button>Delete</button> </li>` );

let newArr =  arr.forEach( (item,index, arr)=>{
    return item;
} )

console.log(newArr);
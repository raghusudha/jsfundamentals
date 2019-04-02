(function(){   
    'use strict' ;
var array;
array=[{id:1,price:300},
{id:2,price:200},
{id:3,price:700},
{id:4,price:70},
{id:5,price:50},]
//using for loop
    for(var i=0;i<array.length;i++){
        if(array[i].price>100){
            console.log(array[i].price);
        }
    }

//using filter
   let x=array.filter((item,index)=>{
    return item.price>100;
   
})
console.log(x);

//using map

let y=array.map((item,index)=>{
    if(item.price>100){
        let product=item;
        product.position=index;
        return product;
    }
})
console.log(y);

//using filter with position

let finalArray=array.filter((item,index)=>{
    item.position=index;
        return item.price>100;
})
    

console.log(finalArray);


//using find
let z=array.find((item,index)=>{
    item.position=index;
    return item.price>100;
})
console.log(z);

//using old variable

// array.filter(x=>x.price>10)
// console.log(x);

})();




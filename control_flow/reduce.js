const mynums=[1,2,3]
// let mytotal=mynums.reduce(function (acc,curvalue) {
//      console.log(`acc${acc} and currval: ${curvalue}`);
//      return acc+curvalue;
// },0)

const mytotal=mynums.reduce((acc,cur)=>acc+cur ,0)
console.log(mytotal);

const shoppingCart = [
     {
         itemName: "js course",
         price: 2999
     },
     {
         itemName: "py course",
         price: 999
     },
     {
         itemName: "mobile dev course",
         price: 5999
     },
     {
         itemName: "data science course",
         price: 12999
     },
 ]

 const add=shoppingCart.reduce((acc,item)=>acc+item.price,0)
 console.log(add);
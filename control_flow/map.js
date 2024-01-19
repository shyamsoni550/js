const mynum=[1,2,3,4,5,6,7,8,9]
  
// let newnum=mynum.map((num)=>{return num+10})
// console.log(newnum);

//chsining

let newnum=mynum.map((num)=>{return num*10}).map((num)=>{return num+1}).filter((num)=>{return num>=40})
console.log(newnum);
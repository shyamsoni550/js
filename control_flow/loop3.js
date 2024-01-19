//for of for arrays
//object,string,array all are iterator you can loop any one 
const arr=[1,2,3,4,5]
for (const num of arr) {
     // console.log(num);
}

const greetings="hello world!"
for (const greet of greetings) {
     if (greet==" ") {
          continue;
     }
     // console.log(`each char is : ${greet}`);
}

//maps : unique values
const map=new Map()
map.set( 'IN',"INDIA")
map.set( 'USA',"AMERICA")
map.set( 'SA',"AFRICA")
// console.log(map);

for (const [key,value] of map) {
     // console.log(key, ':- ',value);
}


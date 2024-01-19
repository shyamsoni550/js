//for in for objects

const myobj=
{
     game1: 'gta5 ',
     game2: 'cricket ',
     game3: 'chess '
}

for (const key in myobj) {
     // console.log(`${key} for game is : ${myobj[key]}`);
}

const programming=["java","javascript","c++"]
for (const key in programming) {
//     console.log(programming[key]);
}

//non-itervatable
const map=new Map()
map.set( 'IN',"INDIA")
map.set( 'USA',"AMERICA")
map.set( 'SA',"AFRICA")

for (const [key,value] in map) {
   console.log(key,value);
}
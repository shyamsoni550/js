const mail=[]

if (mail) {
     console.log("got the mail");
} else {
     console.log("dont have mail");
}

// flasy values 
// false,0,-0,"",bigint 0n,null,undefined,NAN

//truthy value
// [],"0", 'false'," ",{},function()

if (mail.length===0) {
     console.log("arr is empty");
}

const obj={}
if (Object.keys(obj).length===0) {
     console.log("object is empty");
}

//nullish coalsing operator(??):null undefined

let val1;
// val1=5??10
// val1=null??10
val1=undefined??15
console.log(val1);

//ternary operatoe
// conditio ? true:false

const age="20"           
age>=18 ? console.log("adult") : console.log("school");
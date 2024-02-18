// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

// heroPower.hitesh()
myHeros.hitesh()

//inheritence:

const user={
     name:`chai`,
     email:`vaya@gmail.com`
}
const teacher={
     makevideo:true
}

const teachingsupport={
     isavailable:false
}

const TAsupport={
     makeassighment : `js assighment`,
     fulltime : true,
     __proto__:teachingsupport
}

teacher.__proto__=user

//morden syntax
Object.setPrototypeOf(teachingsupport,teacher)

let anotherusername=`chaiaurshyam    `
String.prototype.trueLength=function () {
     console.log(`${this}`);
     console.log(`${this.name}`);
     console.log(`true length is:${this.trim().length}`); 
}

anotherusername.trueLength()
"shyam".trueLength()
"soni".trueLength()
//if syntex 
// comparisoion operators <,>,<=,>=,==(only use to check),===(check both variable data type and its value ),!=
// if (2=="2") {
//      console.log("executed");
// }

// let temp=41

// if (temp<50) {
//      console.log("less then 50");
// }
// console.log("temp is greater then 50");
 
// let run=200
// if (run>100) {
//      let power="drive"
//      console.log(`user poewer ${power}`);
// }

// console.log(`user poewer ${power}`);

// const balance=1000
// if (balance<500) {
//      console.log("balance is less than 500");
// }
// else if (balance<750) {
//      console.log("balance is less than 750");
// }
// else if (balance<900) {
//      console.log("balance is less than 900");
// }
// else
// {
//      console.log("balance is less than 1000");
// }

const userlggedin=true
const debitcard=true
const loginfromgoogle=false
const loggedinfromemail=true

if (userlggedin && debitcard) {
     console.log("allow  shoppeing");
}

if (loginfromgoogle || loggedinfromemail) {
     console.log("allow  shoppeing");
}

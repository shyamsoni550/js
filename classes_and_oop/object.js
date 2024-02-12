// function multiplayby5(num)
// {
//      return num*5
// }

// multiplayby5.power=2;
// console.log(multiplayby5(5));
// console.log(multiplayby5.power);
// console.log(multiplayby5.prototype);

function createuser(username,score) {
     this.username=username;
     this.score=score;
}

createuser.prototype.increment=()=>{
     this.score++;
}
createuser.prototype.printme=()=>
{
     console.log(`price is ${this.score}`);
}

const chai=new createuser("chai",25);
const tea=createuser("tea",250);

chai.printme()

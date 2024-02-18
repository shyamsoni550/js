class user{
     constructor (username){
          this.username=username
     }

     logme(){
          console.log(`USERNAME is ${this.username}`);
     }
}

class teacher extends user{
     constructor(username,email,password)
     {
          super(username)
          this.email=email;
          this.password=password;
     }

     addcource(){
          console.log(`new cource was added by ${this.username}`);
     }
}

const chai=new teacher(`chai`,`chai@gmail.com`,`123`)
chai.addcource()

const masalachai=new user(`masalachai`)
masalachai.logme()

console.log(chai instanceof user);
// console.log(chai instanceof teacher);
// const user={
//      username:`shyam`,
//      logincount:8,
//      signin:true,
//      getuserdeatil:function () {
//           // console.log(`got user deatil from database`);
//           console.log(`username:${this.username}`);
//           console.log(this);
//      }
// }

// console.log(user.username);
// console.log(user.getuserdeatil());
// console.log(this);

//constructor function:

//  const promiceone=new Promise()

function user(username,logincount,isloggedin) 
{     
     //this keyword inject a new name on variable
          this.username=username;
          this.logincount=logincount;
          this.isloggedin=isloggedin;
          return this
}

//new kryword create an empry onjet that called instance
const userone=new user("shyam",12,true)
const usertwo=new user("shyam",12,true)
console.log(userone.constructor);
// console.log(usertwo);

//search instance of in javascript


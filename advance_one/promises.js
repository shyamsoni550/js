const promiseone = new Promise(function (resolve, reject) {
     //do and async task
     //db call ,cryptography,network call
     setTimeout(() => {
          console.log(`async task is completed`);
          resolve()
     }, 1000);
})

promiseone.then(() => {
     console.log(`promice conumed`)
})

const promisetwo = new Promise(function (resolve, reject) {
     //do and async task
     //db call ,cryptography,network call
     setTimeout(() => {
          console.log(`async task 2 is completed`);
          resolve()
     }, 1000);
}).then(() => {
     console.log(`async 2 resolved`);
})

const promisethree = new Promise(function (resolve, reject) {
     setTimeout(function () {
          resolve({ username: `shyam`, email: `shyam@example.com` })
     }, 1000)
}).then((user) => {
     console.log(user);
})

const promise4 = new Promise(function (resolve, reject) {
     setTimeout(function () {
          let error = false
          if (!error) {
               resolve({ username: `shyam`, password: `123` })
          }
          else {
               reject(`error:something went wrong`)
          }
     }, 1000)
})

const username = promise4.then((user) => {
     console.log(user);
     return user.username
}).then((username) => {
     console.log(username);
}).catch(function (error) {
     console.log(error);
}).finally(()=>console.log(`promise either resolve or rejected`))


// console.log(username);

const promise5=new Promise(function (reject,resolve) {
     setTimeout(function () {
          let error = false
          if (!error) {
               resolve({ username: `js`, password: `123` })
          }
          else {
               reject(`error:js went wrong`)
          }
     }, 1000)
})

async function consumepromise5(){
   try {
     const response=await promise5;
     console.log(response);
   } catch (error) {
     console.log(error);
     
   }
}


consumepromise5()

// async function getallusers() {
//      try {
//           const response=await fetch(`https://jsonplaceholder.typicode.com/users`)
//           const data=await response.json()
//           console.log(data); 
//      } catch (error) {
//           console.log("E:",error);
//      }
// }

// getallusers()

fetch(`https://api.github.com/users/hiteshchoudhary`)
.then((response)=>{
     return response.json()
})
.then((data)=>{
     console.log(data);
})
.catch((error)=>console.log(error));

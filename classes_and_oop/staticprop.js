class user {
     constructor(username) {
          this.username = username;
     }
     logme() {
          console.log(`username:${this.username}`);
     }
     static createid() {
          return `123`
     }
}

const hitesh = new user(`hitesh`)
console.log(hitesh.createid());
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
        this.isAdmin = false;
        this.isOnline = false;
    }
    // attach prototypes to the user
    login() {
        this.isOnline = true;
        console.log(`${this.email} has logged in`);
    }
    // log out
    logout() {
        this.isOnline = false;
        console.log(`${this.email} has logged out`);
    }
    // change admin status
    setAdmin() {
        this.isAdmin = true;
        console.log(`${this.email} is now an admin`);
    }
}


// create a user
var userOne = new User('johndoe@email.com', 'password');

console.log(userOne);

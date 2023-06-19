/*=======================
    Create a class called User with properties username and password. Implement a getter method for password that returns the password with all characters replaced by asterisks. Implement a setter method for password that checks if the new password is at least 8 characters long and contains at least one number and one uppercase letter. If the password is valid, set the new password. If not, log an error message.
========================*/
class User {
    constructor(username, password) {
        this.username = username;
        this._password = "password does not set\n[password set using password properties]"
        if (this.checkPassword(password)) {
            this._password = password;
        }
    }

    get password() {
        // return this._password.replace(/./g, '*');
        return this._password;
    }

    set password(newPassword) {
        if (this.checkPassword(newPassword)) {
            this._password = newPassword;
        }
    }

    checkPassword(newPassword) {
        // used regEx
        if (!(newPassword.length >= 8 && /\d/.test(newPassword) && /[A-Z]/.test(newPassword))) {
            console.error(`\nInvalid password: ${newPassword} \n[Password must be at least 8 characters long, contain at least one number, and one uppercase letter.]\n`);
        }
        else return true;
    }
}

// Example usage
const user = new User('johnsmith', 'Pass');

console.log(user.password);
user.password = 'newPassword';

user.password = 'StrongPassword121';
// console.log(user.password);
console.log(user.password);

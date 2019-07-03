export class AuthHelper {
    static checkEmail(email) {
        if (email == "") {
            throw new Error("Email is empty");
        }

        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regexTest = emailRegex.test(email);

        if (!regexTest) {
            throw new Error("Incorrect Email format");
        }
    }

    static checkPassword(password) {
        if (password.length < 6) {
            throw new Error("Password is too short");
        }
    }
}

const { storeUser } = require("../service/userService");
const { checkInputs } = require("../validations/zod");

async function signUpMiddleware(req, res, next) {

    try {
        //zod validation
        const zodResponse = checkInputs(req.body);
        if (!zodResponse.success) {
            // map errors and return them,
            const messages = zodResponse.error.issues.map(val => val.message);
            return res.json({ message: messages });   // return zod errors
        }
        else {
            // find in db
            await storeUser(req.body); // if any db error catch execute, "like userAlready Exists"
            next();
        }
    } catch (error) {
        console.log("error called- " + error);
        res.json({ message: error.message })
        // next(error); // express own middleware
    }
}



// signIn middleware
function signInMiddlware(req, res, next) {


    const isUserExists = isUserExists1(users, username, password); // function to check is username is valid 

    if (isUserExists) {
        // generate token
        const token = jwt.sign({ username: isUserExists.username }, jwt_secret); // generates token by the username returned by isUserExists
        res.header("token", token);  // sends token to header in string format in token variable
        next();
    }
    else {
        res.send("Wrong username or password");

    }
}




function isValid(req, res, next) {
    const token = req.headers.token;
    if (token) {
        const decodeToken = jwt.verify(token, jwt_secret); // decode token
        const readFileUsers = readFileSynco(); // reads users from users.json through above function
        const isUserFound = isUserExists2(readFileUsers, decodeToken.username);

        req.isUserFound = isUserFound;
        next();

    }
    else {
        res.json({ mssg: "Invalid token" })
    }

}



module.exports = { signUpMiddleware };
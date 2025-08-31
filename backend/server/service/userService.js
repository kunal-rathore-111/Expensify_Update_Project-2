

const { usersModel } = require("../models/Models");
const bcrypt = require("bcrypt");


async function storeUser(body) {
    const { username, password } = body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await usersModel.create({
        username: username,
        password: hashedPassword
    });
}


async function isUserExists(body) {
    const { username, password } = body;
    const isUserFound = await usersModel.findOne({
        username: username
    });

    if (isUserFound) {
        const checkPassword = await bcrypt.compare(password, isUserFound.password);
        if (!checkPassword) {
            const error = new Error("Password Invalid");
            error.type = "Password";
            throw error;
        }
    }
    else {
        const error = new Error("User not found");
        error.type = "Username";
        throw error;
    }
}


module.exports = { isUserExists, storeUser };
const User = require('../models/user.models');
const {MAXAGE, SECRET} = require("../configs/constants.configs");
const jwt = require("jsonwebtoken");

class UserService {
    //checks if user exists
    async userExists(data) {
        const user = await User.findOne(data);
        return user ? true : false;
    }

    // finds a user by data
    async find(data) {
        return await User.findOne(data);
    }

    //create room
    async create(user) {
        return await User.create(user);
    }

    //get all users
    async getAll() {
        return await User.find({}, "-__v");
    }

    //edit user details with id
    async edit(id, data) {
        return await User.findOneAndUpdate(id, { $set: data }, { new: true });
    }

    //deleting a user details with an id
    async delete(id) {
        return await User.findOneAndDelete(id);
    }

    //creates a json web token
    generateAuthToken (user) {
        return jwt.sign({
            _id: user.id,
            email: user.email,
            role: user.role
        }, SECRET, {
            expiresIn: MAXAGE
        });
    };
}

module.exports=new UserService()
const {UserRespository} = require('../Respository.js')


const userRespository = new UserRespository();

async function createUser(data) {
    try {
        const user = await userRespository.create(data)
        return user;
    } catch (error) {
        return error;
    }
}

async function loginUser(data) {
    try {
        const user = await userRespository.login(data)
        return user;
    } catch (error) {
        return error;
    }
}


async function destoryUser(data) {
    try {
        const user = await userRespository.destroy(data)
        return user;
    } catch (error) {
        return error;
    }
}

async function getUser(data) {
    try {
        const user = await userRespository.findById(data)
        return user;
    } catch (error) {
        return error;
    }
}

async function getAllUser() {
    try {
        const user = await userRespository.getAll()
        return user;
    } catch (error) {
        return error;
    }
}

async function updateUser(id,data) {
    try {
        const user =await userRespository.update(id , data)
        return user;
    } catch (error) {
        return error;
    }
}

module.exports = {
    createUser,
    destoryUser,
    getUser,
    getAllUser,
    updateUser,
    loginUser
}
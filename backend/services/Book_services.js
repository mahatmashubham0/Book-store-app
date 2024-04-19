const {BookRespository} = require('../Respository.js')


const bookRespository = new BookRespository();

async function createBook(data) {
    try {
        const book = await bookRespository.create(data)
        return book;
    } catch (error) {
        return error;
    }
}

async function destoryBook(data) {
    try {
        const book = await bookRespository.destroy(data)
        return book;
    } catch (error) {
        return error;
    }
}

async function getBook(data) {
    try {
        const book = await bookRespository.findById(data)
        return book;
    } catch (error) {
        return error;
    }
}

async function getAllBook() {
    try {
        console.log("Services")
        const book = await bookRespository.getAll()
        console.log("==>",book)
        return book;
    } catch (error) {
        return error;
    }
}

async function updateBook(id,data) {
    try {
        const book =await bookRespository.update(id , data)
        return book;
    } catch (error) {
        return error;
    }
}

module.exports = {
    createBook,
    destoryBook,
    getBook,
    getAllBook,
    updateBook
}
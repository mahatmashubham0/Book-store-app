const CrudRespository = require('./crud_respository')
const Book = require('../model/book_model')

class BookRespository extends CrudRespository {
    constructor() {
        super(Book);
    }
}

module.exports = BookRespository;
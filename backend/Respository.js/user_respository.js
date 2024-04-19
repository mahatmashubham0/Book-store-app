const CrudRespository = require('./crud_respository')
const User = require('../model/user_model')
const AppError = require('../utils/index')
const {StatusCodes} = require('http-status-codes')

class BookRespository extends CrudRespository {
    constructor() {
        super(User);
    }

    async login(data) {
    const response = await User.findOne(data);
    if (!response) {
      // if id data is not present so destroy mthod give 0 and present so five 1 value inside the response variable
       throw new AppError.app_error("Not found the resourse", StatusCodes.NOT_FOUND);
    }
    return response;
   }

   
}

module.exports = BookRespository;
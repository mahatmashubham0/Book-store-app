const {bookServices} = require('../services')

async function createBook(req,res) {
    try {
        const book = await bookServices.createBook({
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            image: req.body.image,
            title: req.body.title
        })
        return res.status(200).json({
            success: true,
            data: book,
        });
    } catch (error) {
        console.log(error)
    }
}

async function destoryBook(req,res) {
    try {
        const book = await bookServices.destoryBook(req.params.id)
        return res.status(200).json({
            success: true,
            data: book,
        });
    } catch (error) {
        console.log(error)
    }
}

async function getBook(req,res) {
    try {
        const book = await bookServices.getBook(req.params.id)
        return res.status(200).json({
            success: true,
            data: book,
        });
    } catch (error) {
        console.log(error)
    }
}

async function getAllBook(req,res) {
    try {
        console.log("controller");
        const book = await bookServices.getAllBook()
        return res.status(200).json({
            success: true,
            data: book,
        });
    } catch (error) {
        console.log(error)
    }
}

async function updateBook(req,res) {
    try {
        const book = await bookServices.updateBook(req.params.id , 
        {
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            image: req.body.image,
            title: req.body.title
        }
        )
        return res.status(200).json({
            success: true,
            data: book,
        });
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createBook,
    destoryBook,
    getBook,
    getAllBook,
    updateBook
}
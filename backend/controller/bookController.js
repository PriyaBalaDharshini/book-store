import Book from "../models/bookModel.js";

const createBook = async (req, res) => {
    const { title, author, publishYear } = req.body
    try {
        const newBook = { title, author, publishYear };
        const book = await Book.create(newBook);
        res.status(200).send({
            message: "New Book Created Successfully",
            book
        })

    } catch (error) {
        res.status(500).send({
            message: "Internal server Error"
        })
    }
}

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).send({
            message: "Books List Fetched Successfully",
            books
        })

    } catch (error) {
        res.status(500).send({
            message: "Internal server Error"
        })
    }
}

const getBookById = async (req, res) => {
    try {

        const book = await Book.findById({ _id: req.params.id });
        if (!book) {
            return res.status(404).send({
                message: "Book not found"
            });
        }
        res.status(200).send({
            message: "Book details fetched successfully",
            book
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "Internal server error"
        });
    }
};

const deleteBookById = async (req, res) => {
    try {

        const book = await Book.deleteOne({ _id: req.params.id });
        if (!book) {
            return res.status(404).send({
                message: "Book not found"
            });
        }
        res.status(200).send({
            message: "Book Deleted",
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "Internal server error"
        });
    }
};

const updateBookById = async (req, res) => {
    try {
        const { title, author, publishYear } = req.body
        const book = await Book.findById({ _id: req.params.id });
        if (book) {
            title, author, publishYear
            return res.status(404).send({
                message: "Book Updated Successfully",
                book
            });
        } else {
            res.status(404).send({
                message: "Book not found",
            });
        }

    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "Internal server error"
        });
    }
};

export default { createBook, getAllBooks, getBookById, deleteBookById, updateBookById }
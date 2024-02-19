import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Book Name is Mandatory to Fill"]
        },
        author: {
            type: String,
            required: [true, "Author Name is Mandatory to Fill"]
        },
        publishYear: {
            type: Number,
            required: [true, "Published Year is Mandatory to Fill"]
        },
    },
    { timestamps: true }
)

const Book = mongoose.model("Book", bookSchema);
export default Book;
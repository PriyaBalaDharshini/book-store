import express from 'express'
import bookController from "../controller/bookController.js";
const router = express.Router();

router.post("/createBook", bookController.createBook);

router.get("/allBooks", bookController.getAllBooks);
router.get("/book/:id", bookController.getBookById);

router.delete("/book/:id", bookController.deleteBookById);

router.put("/book/:id", bookController.updateBookById);

export default router
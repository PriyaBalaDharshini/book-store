import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AxiosService from '../utils/AxiosService';
import ApiRoutes from '../utils/ApiRoutes';

function Books() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await AxiosService.get(ApiRoutes.ALL_BOOKS.path);
                console.log('Books fetched successfully:', res.data.books);
                setBooks(res.data.books);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };
        fetchBooks(); // Initial fetch when component mounts
    }, []);

    const handleDelete = async (id) => {
        try {
            console.log('Deleting book with id:', id);
            const res = await AxiosService.delete(`${ApiRoutes.BOOK_BY_ID.path}/${id}`);
            console.log('Book deleted successfully');
            console.log('Response:', res.data); // Log the response from the server
            setBooks(res.data.books); // Fetch books again after deletion
        } catch (error) {
            console.error('Error deleting book:', error.response.data.message);
        }
    }

    return (
        <div style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}>
            <h1>List of Books</h1>
            <div className="cards">
                {books.map((book) => (
                    <Card key={book.id} style={{ width: '16rem', textAlign: "center", margin: "20px" }}>
                        <Card.Body>
                            <Card.Title>{book.title}</Card.Title>
                            <Card.Text>{book.author}</Card.Text>
                            <Card.Text>{book.publishYear}</Card.Text>
                            <div className='button'>
                                <Button variant="primary" style={{ marginRight: '10px' }}>Edit</Button>
                                <Button variant="primary" onClick={() => handleDelete(book.id)}>Delete</Button>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Books;

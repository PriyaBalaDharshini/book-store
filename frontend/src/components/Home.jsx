// Home.js
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AxiosService from '../utils/AxiosService';
import ApiRoutes from '../utils/ApiRoutes';
import { useNavigate } from 'react-router-dom';

function Home({ addBook }) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await AxiosService.post(ApiRoutes.CREATE_BOOK.path, { title, author, publishYear: year });
            console.log("Book created successfully:", res.data.book);
            navigate("/allBooks");

        } catch (error) {
            console.error("Error creating book:", error);
        }
    };

    return (
        <div className="wrapper">
            <h1>Enter Book Details</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Book Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Author Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Year</Form.Label>
                    <Form.Control type="text" placeholder="Enter Published Year" value={year} onChange={(e) => setYear(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Button variant="primary" type="submit" onClick={() => navigate("/allBooks")}>
                    See All Books
                </Button>
            </Form>
        </div>
    );
}

export default Home;

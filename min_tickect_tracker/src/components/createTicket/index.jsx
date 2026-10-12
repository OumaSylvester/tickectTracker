import { useState } from "react";
import {Button, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import axios from "axios";

const API_URL = "http://localhost:8000/api/v1/tickets/";

const CreateTicket = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);

        try {
            const response = await axios.post(API_URL, { title, description });
            setSuccess(true);
            setTitle("");
            setDescription("");
            setTimeout(() => setSuccess(false), 2000);
        } catch (error) {
            console.error("Error creating ticket:", error);
            setError("Failed to create ticket. Please try again.");
        }
    };

    return (
        <div>
            <h1>Create Ticket</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>Ticket created successfully!</p>}
            <Form onSubmit={handleSubmit}>
                <div>
                    <Form.Label htmlFor="title">Title</Form.Label>
                    <Form.Control
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <Form.Label htmlFor="description">Description</Form.Label>
                    <Form.Control
                        id="description"
                        as="textarea"
                        rows={3}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <Button type="submit">Create Ticket</Button>
            </Form>
        </div>
    );
};

export default CreateTicket;
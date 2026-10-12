import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import toast from "react-hot-toast";
import axios from "axios";

const API_URL = "http://localhost:8000/api/v1/tickets/";

const UpdateTicketStatusOrPriority = () => {
    const [id, setId] = useState("");
    const [status, setStatus] = useState("");
    const [priority, setPriority] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);

        try {
            const response = await axios.put(`${API_URL}${id}/`, { title, description });
            setSuccess(true);
            setTitle("");
            setDescription("");
            setTimeout(() => setSuccess(false), 2000);
        } catch (error) {
            console.error("Error updating ticket:", error);
            setError("Failed to update ticket. Please try again.");
        }
    };

    return (
        <div>
            <h1>Update Ticket</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>Ticket updated successfully!</p>}
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Status</Form.Label>
                    <Form.Control
                        as="select"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        required
                    >
                        <option value="pending">Pending</option>
                        <option value="in_progress">In Progress</option>
                        <option value="completed">Completed</option>
                        <option value="resolved">Resolved</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Priority</Form.Label>
                    <Form.Control
                        as="select"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        required
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="urgent">Urgent</option>
                    </Form.Control>
                </Form.Group>

                <Button type="submit">Update Ticket</Button>
            </Form>
        </div>
    );
};

export default UpdateTicketStatusOrPriority;
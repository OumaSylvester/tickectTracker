import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./index.css";

const API_URL = "http://localhost:8000/api/v1/tickets/";

const ListTickets = () => {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await axios.get(API_URL);
                console.log('data', response.data)
                setTickets(response?.data?.results);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching tickets:", error);
                setError(error);
                setLoading(false);
            }
        };
        fetchTickets();
    }, []);

    const handleTicketClick = (ticketId) => {
        navigate(`/update/${ticketId}`);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Tickets</h1>
            <p onClick={() => navigate("/create")}>Create Ticket</p>
            <p onClick={() => navigate("/stats")}>Ticket Stats</p>
            <ul>
                {tickets?.map((ticket) => (
                    <li key={ticket.id} onClick={() => handleTicketClick(ticket.id)}>
                        {ticket.title} - {ticket.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListTickets;
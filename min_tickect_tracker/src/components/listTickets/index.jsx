import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:8000/api/v1/tickets/";

const ListTickets = () => {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await axios.get(API_URL);
                setTickets(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching tickets:", error);
                setError(error);
                setLoading(false);
            }
        };

        fetchTickets();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Tickets</h1>
            <ul>
                {tickets.map((ticket) => (
                    <li key={ticket.id}>
                        {ticket.title} - {ticket.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListTickets;
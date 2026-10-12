import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import toast from "react-hot-toast";
import axios from "axios";

const API_URL = "http://localhost:8000/api/v1/tickets/stats/";

function TicketStats() {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await axios.get(API_URL);
                setStats(response.data);
            } catch (error) {
                console.error("Error fetching stats:", error);
                toast.error("Failed to fetch stats");
            }
        };
        fetchStats();
    }, []);

    return (
        <div>
            <h1>Ticket Stats</h1>
            {
                stats && stats.map((stat) => (
                    <div key={stat.status}>
                        <p>{stat.status}: {stat.count}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default TicketStats;
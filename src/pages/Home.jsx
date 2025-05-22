import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/flights')
            .then(res => setFlights(res.data))
            .catch(console.error);
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-semibold mb-4">Available Flights</h1>
            <ul>
                {flights.map(flight => (
                    <li key={flight.id} className="mb-3 border p-3">
                        <h2 className="text-xl font-bold">{flight.flightName}</h2>
                        <p>{flight.origin} to {flight.destination}</p>
                        <Link to={`/flight/${flight.id}`} className="text-blue-500">View Details</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
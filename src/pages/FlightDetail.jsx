import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function FlightDetail() {
    const { id } = useParams();
    const [flight, setFlight] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/flights/${id}`)
            .then(res => setFlight(res.data))
            .catch(console.error);
    }, [id]);

    if (!flight) return <div>Loading...</div>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{flight.flightName}</h1>
            <p>{flight.origin} to {flight.destination}</p>
            <p>Dates: {flight.departureDate} - {flight.returnDate}</p>
            <p>Class: {flight.classType}</p>
            <p>Features: {flight.features}</p>
            <div className="mt-2">
                <h2 className="font-semibold">Prices:</h2>
                <ul>
                    {Object.entries(flight.prices).map(([provider, price]) => (
                        <li key={provider}>{provider}: {price}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
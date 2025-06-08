import React, { useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";

// Define the structure of the event object
interface Event {
  eventName: string;
  eventDate: string;
  sportName: string;
  sportType: string;
}

export default function SearchEvent() {
  const [eventName, setEventName] = useState(""); 
  const [events, setEvents] = useState<Event[]>([]); 
  const [error, setError] = useState(""); 
  const [searched, setSearched] = useState(false); 
  const searchItem = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); 
    setSearched(true);

    try {
      console.log("Searching for event:", eventName); 
      const response = await axios.get(
        `http://localhost:8080/cse/dept/sports/search?eventName=${eventName}`
      );
      console.log("Response data:", response.data); 

      
      if (response.data) {
        setEvents([response.data]); 
      } else {
        setEvents([]);
      }
    } catch (err) {
      console.error("Error fetching events:", err); 
      setError("Failed to fetch events. Please check your API.");
      setEvents([]);
    }
  };

  return (
    <div>
      <NavBar />
      <div>
        {/* Search Form */}
        <form onSubmit={searchItem}>
          <input
            type="text"
            placeholder="Enter Event Name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)} 
          />
          <button type="submit">Search</button>
        </form>

        
        {error && <p style={{ color: "red" }}>{error}</p>}

        
        <table className="table">
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Event Date</th>
              <th>Sport Name</th>
              <th>Sport Type</th>
            </tr>
          </thead>
          <tbody>
            {events.length > 0 ? (
              events.map((event, index) => (
                <tr key={index}>
                  <td>{event.eventName}</td>
                  <td>{event.eventDate}</td>
                  <td>{event.sportName}</td>
                  <td>{event.sportType}</td>
                </tr>
              ))
            ) : (
              searched && (
                <tr>
                  <td colSpan={4} style={{ textAlign: "center" }}>
                    No events found
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

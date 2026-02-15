import { useState } from "react";
import "./App.css";

function App() {
  const camps = [
    {
      id: 1,
      sport: "Cricket",
      age: "8-15",
      fees: "₹2000",
      image: "/images/cricket.jpg"
    },
    {
      id: 2,
      sport: "Football",
      age: "10-16",
      fees: "₹2500",
      image: "/images/football.jpg"
    },
    {
      id: 3,
      sport: "Basketball",
      age: "9-14",
      fees: "₹2200",
      image: "/images/basketball.jpg"
    }
  ];



  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">🏕️ Summer Camp 2026</h1>

      <div className="row">
        {camps.map((camp) => (
          <div className="col-md-4 mb-4" key={camp.id}>
            <div className="card shadow-lg border-0 h-100 camp-card">
              <img
                src={camp.image}
                className="card-img-top"
                alt={camp.sport}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title text-primary">{camp.sport}</h5>
                <p><strong>Age Group:</strong> {camp.age}</p>
                <p><strong>Fees:</strong> {camp.fees}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


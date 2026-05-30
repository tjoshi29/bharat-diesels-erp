import React, { useState } from "react";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "Arial"
      }}>
        <div style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "10px"
        }}>
          <h1>Bharat Diesels ERP</h1>

          <button
            onClick={() => setLoggedIn(true)}
            style={{
              padding: "10px 20px"
            }}
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>

      <h2>Total Stock: 25</h2>
      <h2>Delivered: 8</h2>
      <h2>RTO Pending: 5</h2>

      <button onClick={() => setLoggedIn(false)}>
        Logout
      </button>
    </div>
  );
}

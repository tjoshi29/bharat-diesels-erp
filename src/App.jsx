import React, { useState } from "react";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState("dashboard");

  if (!loggedIn) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontFamily: "Arial"
        }}
      >
        <div
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "10px"
          }}
        >
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
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "Arial"
      }}
    >
      <div
        style={{
          width: "220px",
          background: "#1e3a8a",
          color: "white",
          padding: "20px"
        }}
      >
        <h2>ERP Menu</h2>

        <p onClick={() => setPage("dashboard")} style={{ cursor: "pointer" }}>
          Dashboard
        </p>

        <p onClick={() => setPage("stock")} style={{ cursor: "pointer" }}>
          Stock
        </p>

        <p onClick={() => setPage("delivery")} style={{ cursor: "pointer" }}>
          Delivery
        </p>

        <p onClick={() => setPage("invoice")} style={{ cursor: "pointer" }}>
          Invoice
        </p>

        <p onClick={() => setPage("receipt")} style={{ cursor: "pointer" }}>
          Receipts
        </p>

        <p onClick={() => setPage("rto")} style={{ cursor: "pointer" }}>
          RTO
        </p>

        <hr />

        <button onClick={() => setLoggedIn(false)}>
          Logout
        </button>
      </div>

      <div
        style={{
          flex: 1,
          padding: "20px"
        }}
      >
        {page === "dashboard" && (
          <>
            <h1>Dashboard</h1>
            <h2>Total Stock: 25</h2>
            <h2>Delivered: 8</h2>
            <h2>RTO Pending: 5</h2>
          </>
        )}

        {page === "stock" && (
          <>
            <h1>Stock Management</h1>
            <p>Stock module ready.</p>
          </>
        )}

        {page === "delivery" && (
          <>
            <h1>Delivery Challan</h1>
            <p>Delivery module ready.</p>
          </>
        )}

        {page === "invoice" && (
          <>
            <h1>GST Invoice</h1>
            <p>Invoice module ready.</p>
          </>
        )}

        {page === "receipt" && (
          <>
            <h1>Payment Receipts</h1>
            <p>Receipt module ready.</p>
          </>
        )}

        {page === "rto" && (
          <>
            <h1>RTO Module</h1>
            <p>RTO module ready.</p>
          </>
        )}
      </div>
    </div>
  );
}

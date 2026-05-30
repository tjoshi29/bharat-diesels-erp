import React, { useState } from "react";

export default function App() {
const [page, setPage] = useState("dashboard");

const menuItems = [
"dashboard",
"stock",
"delivery",
"invoice",
"receipts",
"rto"
];

const stockData = [
{
sap: "SAP575XP",
chassis: "MBNGAACDAIRL16072",
model: "575 DI XP Plus",
branch: "Katarpur",
status: "In Stock"
},
{
sap: "SAP275DI",
chassis: "MBNGAACDAIRL16073",
model: "275 DI TU",
branch: "Roorkee",
status: "Delivered"
}
];

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
width: "250px",
background: "#1e3a8a",
color: "white",
padding: "20px"
}}
> <h2>Bharat Diesels ERP</h2>

```
    {menuItems.map((item) => (
      <div
        key={item}
        onClick={() => setPage(item)}
        style={{
          padding: "12px",
          marginTop: "10px",
          cursor: "pointer",
          borderRadius: "8px",
          background:
            page === item ? "#2563eb" : "transparent"
        }}
      >
        {item.toUpperCase()}
      </div>
    ))}
  </div>

  <div
    style={{
      flex: 1,
      padding: "30px",
      background: "#f8fafc"
    }}
  >
    {page === "dashboard" && (
      <>
        <h1>Dashboard</h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap"
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "200px"
            }}
          >
            <h3>Total Stock</h3>
            <h2>25</h2>
          </div>

          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "200px"
            }}
          >
            <h3>Delivered</h3>
            <h2>8</h2>
          </div>

          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "200px"
            }}
          >
            <h3>RTO Pending</h3>
            <h2>5</h2>
          </div>
        </div>
      </>
    )}

    {page === "stock" && (
      <>
        <h1>Stock Management</h1>

        <table
          border="1"
          cellPadding="10"
          style={{
            background: "white",
            borderCollapse: "collapse",
            width: "100%"
          }}
        >
          <thead>
            <tr>
              <th>SAP Code</th>
              <th>Chassis No</th>
              <th>Model</th>
              <th>Branch</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {stockData.map((row, index) => (
              <tr key={index}>
                <td>{row.sap}</td>
                <td>{row.chassis}</td>
                <td>{row.model}</td>
                <td>{row.branch}</td>
                <td>{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )}

    {page === "delivery" && (
      <>
        <h1>Delivery Challan</h1>
        <p>Select tractor from stock and generate challan.</p>
      </>
    )}

    {page === "invoice" && (
      <>
        <h1>GST Invoice</h1>
        <p>Invoice module coming next step.</p>
      </>
    )}

    {page === "receipts" && (
      <>
        <h1>Payment Receipts</h1>
        <p>Receipt module coming next step.</p>
      </>
    )}

    {page === "rto" && (
      <>
        <h1>RTO Module</h1>
        <p>RTO pending tractors will appear here.</p>
      </>
    )}
  </div>
</div>
```

);
}

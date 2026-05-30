import React, { useState } from "react";

export default function App() {
const [page, setPage] = useState("dashboard");

return (
<div style={{ display: "flex", minHeight: "100vh" }}>
<div
style={{
width: "250px",
background: "#1e3a8a",
color: "white",
padding: "20px"
}}
> <h2>Bharat Diesels ERP</h2>

```
    <button onClick={() => setPage("dashboard")}>Dashboard</button>
    <br /><br />

    <button onClick={() => setPage("stock")}>Stock</button>
    <br /><br />

    <button onClick={() => setPage("delivery")}>Delivery</button>
  </div>

  <div style={{ flex: 1, padding: "20px" }}>
    {page === "dashboard" && <h1>Dashboard Working</h1>}

    {page === "stock" && (
      <>
        <h1>Stock Management</h1>

        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>SAP</th>
              <th>Model</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>SAP575XP</td>
              <td>575 DI XP Plus</td>
            </tr>
          </tbody>
        </table>
      </>
    )}

    {page === "delivery" && (
      <h1>Delivery Challan Module</h1>
    )}
  </div>
</div>
```

);
}

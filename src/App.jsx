import React, { useState } from "react";

export default function App() {
const [loggedIn, setLoggedIn] = useState(false);

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
> <div> <h1>Bharat Diesels ERP</h1>

```
      <button
        onClick={() => setLoggedIn(true)}
        style={{
          padding: "10px 20px",
          cursor: "pointer"
        }}
      >
        Login Demo
      </button>
    </div>
  </div>
);
```

}

return (
<div style={{ padding: "20px", fontFamily: "Arial" }}> <h1>Bharat Diesels ERP Dashboard</h1>

```
  <p>Login Successful</p>

  <button
    onClick={() => setLoggedIn(false)}
  >
    Logout
  </button>

  <hr />

  <h2>Total Stock: 25</h2>
  <h2>Delivered: 8</h2>
  <h2>RTO Pending: 5</h2>
</div>
```

);
}

import React, { useState } from "react";

export default function App() {
const [loggedIn, setLoggedIn] = useState(false);
const [role, setRole] = useState("");
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const users = [
{
username: "owner",
password: "owner123",
role: "Owner"
},
{
username: "manager",
password: "manager123",
role: "Manager"
},
{
username: "cashier",
password: "cash123",
role: "Cashier"
},
{
username: "rto",
password: "rto123",
role: "RTO"
}
];

const login = () => {
const user = users.find(
(u) =>
u.username === username &&
u.password === password
);

```
if (user) {
  setRole(user.role);
  setLoggedIn(true);
} else {
  alert("Invalid Login");
}
```

};

if (!loggedIn) {
return (
<div
style={{
display: "flex",
justifyContent: "center",
alignItems: "center",
height: "100vh",
background: "#f1f5f9",
fontFamily: "Arial"
}}
>
<div
style={{
background: "white",
padding: "30px",
width: "350px",
borderRadius: "10px",
boxShadow: "0 0 10px rgba(0,0,0,0.1)"
}}
> <h2>Bharat Diesels ERP</h2>

```
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) =>
          setUsername(e.target.value)
        }
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px"
        }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px"
        }}
      />

      <button
        onClick={login}
        style={{
          width: "100%",
          padding: "10px",
          background: "#1e3a8a",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        Login
      </button>

      <hr />

      <p>owner / owner123</p>
      <p>manager / manager123</p>
      <p>cashier / cash123</p>
      <p>rto / rto123</p>
    </div>
  </div>
);
```

}

return (
<div
style={{
padding: "20px",
fontFamily: "Arial"
}}
> <h1>Bharat Diesels ERP Dashboard</h1>

```
  <h3>Logged In As: {role}</h3>

  <button
    onClick={() => {
      setLoggedIn(false);
      setUsername("");
      setPassword("");
    }}
  >
    Logout
  </button>

  <hr />

  <div>
    <h2>Total Stock: 25</h2>
    <h2>Delivered: 8</h2>
    <h2>RTO Pending: 5</h2>
  </div>
</div>
```

);
}

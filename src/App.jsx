import React, { useState } from 'react';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [stockData, setStockData] = useState([
    {
      chassis: 'MBNGAACDAIRL16072',
      engine: 'RTL4VDN1206',
      model: '575 DI XP Plus',
      sap: 'SAP575XP',
      branch: 'Katarpur',
      status: 'In Stock',
    },
  ]);

  const [formData, setFormData] = useState({
    chassis: '',
    engine: '',
    model: '',
    sap: '',
    branch: 'Katarpur',
    status: 'In Stock',
  });

  const users = [
    {
      username: 'owner',
      password: 'owner123',
      role: 'Owner',
    },
    {
      username: 'manager',
      password: 'manager123',
      role: 'Manager',
    },
    {
      username: 'cashier',
      password: 'cash123',
      role: 'Cashier',
    },
    {
      username: 'rto',
      password: 'rto123',
      role: 'RTO Operator',
    },
  ];

  const loginUser = () => {
    const user = users.find(
      (u) =>
        u.username === username &&
        u.password === password
    );

    if (user) {
      setRole(user.role);
      setIsLoggedIn(true);
    } else {
      alert('Invalid Login');
    }
  };

  const saveStock = () => {
    if (
      !formData.chassis ||
      !formData.engine ||
      !formData.model
    ) {
      alert('Please Fill Required Fields');
      return;
    }

    setStockData([...stockData, formData]);

    setFormData({
      chassis: '',
      engine: '',
      model: '',
      sap: '',
      branch: 'Katarpur',
      status: 'In Stock',
    });
  };

  if (!isLoggedIn) {
    return (
      <div
        style={{
          minHeight: '100vh',
          background: '#f1f5f9',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'Arial',
        }}
      >
        <div
          style={{
            background: 'white',
            padding: '40px',
            borderRadius: '20px',
            width: '360px',
            boxShadow:
              '0 10px 30px rgba(0,0,0,0.1)',
          }}
        >
          <h1
            style={{
              marginBottom: '10px',
              color: '#1e3a8a',
            }}
          >
            Bharat Diesels ERP
          </h1>

          <p
            style={{
              color: '#64748b',
              marginBottom: '25px',
            }}
          >
            Login To Continue
          </p>

          <input
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
            style={{
              width: '100%',
              padding: '12px',
              marginBottom: '15px',
              borderRadius: '10px',
              border: '1px solid #cbd5e1',
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
              width: '100%',
              padding: '12px',
              marginBottom: '20px',
              borderRadius: '10px',
              border: '1px solid #cbd5e1',
            }}
          />

          <button
            onClick={loginUser}
            style={{
              width: '100%',
              padding: '14px',
              background: '#1e3a8a',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Login
          </button>

          <div
            style={{
              marginTop: '25px',
              fontSize: '14px',
              lineHeight: '28px',
            }}
          >
            <div>Owner : owner / owner123</div>
            <div>Manager : manager / manager123</div>
            <div>Cashier : cashier / cash123</div>
            <div>RTO : rto / rto123</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: '30px',
        background: '#f8fafc',
        minHeight: '100vh',
        fontFamily: 'Arial',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '30px',
        }}
      >
        <div>
          <h1>Bharat Diesels ERP</h1>

          <p>
            Logged In As :
            <b> {role}</b>
          </p>
        </div>

        <button
          onClick={() => setIsLoggedIn(false)}
          style={{
            background: '#dc2626',
            color: 'white',
            border: 'none',
            padding: '12px 18px',
            borderRadius: '10px',
            cursor: 'pointer',
          }}
        >
          Logout
        </button>
      </div>

      <div
        style={{
          background: 'white',
          padding: '25px',
          borderRadius: '20px',
          marginBottom: '30px',
        }}
      >
        <h2>Stock Entry Form</h2>

        <div
          style={{
            display: 'grid',
            gap: '15px',
            marginTop: '20px',
          }}
        >
          <input
            placeholder="Chassis No"
            value={formData.chassis}
            onChange={(e) =>
              setFormData({
                ...formData,
                chassis: e.target.value,
              })
            }
          />

          <input
            placeholder="Engine No"
            value={formData.engine}
            onChange={(e) =>
              setFormData({
                ...formData,
                engine: e.target.value,
              })
            }
          />

          <input
            placeholder="Model"
            value={formData.model}
            onChange={(e) =>
              setFormData({
                ...formData,
                model: e.target.value,
              })
            }
          />

          <input
            placeholder="SAP Code"
            value={formData.sap}
            onChange={(e) =>
              setFormData({
                ...formData,
                sap: e.target.value,
              })
            }
          />

          <select
            value={formData.branch}
            onChange={(e) =>
              setFormData({
                ...formData,
                branch: e.target.value,
              })
            }
          >
            <option>Katarpur</option>
            <option>Deoband</option>
          </select>

          <button
            onClick={saveStock}
            style={{
              background: '#1e3a8a',
              color: 'white',
              border: 'none',
              padding: '14px',
              borderRadius: '10px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Save Stock Entry
          </button>
        </div>
      </div>

      <div
        style={{
          background: 'white',
          padding: '25px',
          borderRadius: '20px',
        }}
      >
        <h2>Live Stock Data</h2>

        <table
          style={{
            width: '100%',
            marginTop: '20px',
            borderCollapse: 'collapse',
          }}
        >
          <thead>
            <tr
              style={{
                background: '#e2e8f0',
              }}
            >
              <th style={{ padding: '12px' }}>
                Chassis
              </th>

              <th style={{ padding: '12px' }}>
                Engine
              </th>

              <th style={{ padding: '12px' }}>
                Model
              </th>

              <th style={{ padding: '12px' }}>
                SAP
              </th>

              <th style={{ padding: '12px' }}>
                Branch
              </th>

              <th style={{ padding: '12px' }}>
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {stockData.map((item, index) => (
              <tr key={index}>
                <td style={{ padding: '12px' }}>
                  {item.chassis}
                </td>

                <td style={{ padding: '12px' }}>
                  {item.engine}
                </td>

                <td style={{ padding: '12px' }}>
                  {item.model}
                </td>

                <td style={{ padding: '12px' }}>
                  {item.sap}
                </td>

                <td style={{ padding: '12px' }}>
                  {item.branch}
                </td>

                <td style={{ padding: '12px' }}>
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

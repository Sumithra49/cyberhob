// src/components/Sidebar.jsx
import React from "react";
import { getUser, logout } from "../services/authService";

const Sidebar = ({ onSelect }) => {
  const user = getUser();

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  return (
    <div style={styles.sidebar}>
      <h2>CyberHop</h2>
      <div style={styles.profile}>
        <p><strong>{user?.name}</strong></p>
        <p>{user?.email}</p>
      </div>
      <ul style={styles.menu}>
        {["Dashboard", "Expenses", "Account", "Settings", "Wallet", "Summary"].map((item) => (
          <li key={item} onClick={() => onSelect(item)}>{item}</li>
        ))}
      </ul>
      <button onClick={handleLogout} style={styles.logout}>Logout</button>
    </div>
  );
};

const styles = {
  sidebar: { width: "250px", background: "#222", color: "white", height: "100vh", padding: "20px" },
  profile: { marginBottom: "20px", textAlign: "center" },
  menu: { listStyle: "none", padding: "0" },
  logout: { marginTop: "20px", padding: "10px", background: "red", color: "white", cursor: "pointer", border: "none" },
};

export default Sidebar;

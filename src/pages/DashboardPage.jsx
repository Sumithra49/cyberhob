// src/pages/Dashboard.jsx
import React, { useState } from "react";
import ExpenseChart from "../components/ExpenseChart";
import Sidebar from "../components/Sidebar";

const DashboardPage = () => {
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");

  return (
    <div style={styles.container}>
      <Sidebar onSelect={setSelectedMenu} />
      <div style={styles.content}>
        <h1>{selectedMenu}</h1>
        {selectedMenu === "Expenses" && <ExpenseChart />}
      </div>
    </div>
  );
};

const styles = {
  container: { display: "flex" },
  content: { flex: 1, padding: "20px" },
};

export default DashboardPage;

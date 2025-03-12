// src/components/ExpenseChart.jsx
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { fetchExpenses } from "../services/apiService";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ExpenseChart = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const loadExpenses = async () => {
      const data = await fetchExpenses();
      setExpenses(data);
    };
    loadExpenses();
  }, []);

  // Extract dates & totals
  const dates = expenses.map((expense) => expense.date);
  const totals = expenses.map((expense) => expense.total);

  const chartData = {
    labels: dates, // Show multiple dates on the X-axis
    datasets: [
      {
        label: "Money Spent ($)",
        data: totals, // Total expenses for each date
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div style={styles.container}>
      <h3>Expense Overview</h3>
      <div style={styles.chartWrapper}>
        <Bar data={chartData} options={{ maintainAspectRatio: false }} />
      </div>

      {/* 👇 Detailed Breakdown for the most recent date */}
      {expenses.length > 0 && (
        <div style={styles.breakdown}>
          <h4>Breakdown ({expenses[0].date})</h4>
          <ul>
            {Object.entries(expenses[0].details).map(([category, amount]) => (
              <li key={category}>
                <strong>{category}:</strong> ${amount}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: { textAlign: "center", margin: "20px", padding: "10px", border: "1px solid #ddd", borderRadius: "10px", width: "350px" },
  chartWrapper: { width: "300px", height: "200px", margin: "0 auto" },
  breakdown: { marginTop: "15px", textAlign: "left", padding: "10px" },
};

export default ExpenseChart;

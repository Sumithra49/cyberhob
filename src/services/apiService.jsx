// src/services/apiService.jsx
export const fetchExpenses = async () => {
    return [
      {
        date: "2024-03-10",
        total: 180,
        details: {
          Groceries: 60,
          Vegetables: 40,
          Housing: 80,
        },
      },
      {
        date: "2024-03-09",
        total: 150,
        details: {
          Groceries: 50,
          Vegetables: 30,
          Housing: 70,
        },
      },
      {
        date: "2024-03-08",
        total: 120,
        details: {
          Groceries: 40,
          Vegetables: 20,
          Housing: 60,
        },
      },
      
    ];
  };
  
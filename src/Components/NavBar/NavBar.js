import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function NavBar() {
  const [budgetData, setBudgetData] = useState([]);
  let totalWealth = [];

  async function fetchTransactions() {
    try {
      let URL =
        process.env.NODE_ENV === "production"
          ? "https://backend-project-budgeting-app.onrender.com/transactions"
          : "http://localhost:3001/transactions";
      let result = await axios.get(URL);

      setBudgetData(result.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  function handleTotalWealth() {
    budgetData.map((item) => totalWealth.push(item.amount));
    return totalWealth.reduce((acc, curr) => acc + curr, 0);
  }

  return (
    <nav className="navbar navbar-expand-lg text-bg-success p-2 font-link">
      <div className="container-fluid">
        <span className="navbar-brand text-light mb-0 h1">
          <Link
            to="/transactions"
            className="text-decoration-none nav-link text-light"
          >
            Budgtr
          </Link>
        </span>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              to="/transactions/new"
              className="text-decoration-none nav-link text-light"
            >
              Create Transaction
            </Link>
            <div className="text-bg-success p-2 font-link">
              Calculator Total:
              {handleTotalWealth().toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

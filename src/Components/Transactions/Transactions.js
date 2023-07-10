import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Transactions() {
  const [budgetData, setBudgetData] = useState([]);

  async function fetchTransactions() {
    try {
      let URL =
        process.env.NODE_ENV === "production"
          ? "https://backend-project-budgeting-app.onrender.com/transactions"
          : "http://localhost:3001/transactions";
      let result = await axios.get(URL);

      setBudgetData(result.data);
      console.log(result.data);
    } catch (e) {
      console.log(e);
      return (
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Transactions Not Found
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <p>Oh No! Transactions not found! Please try again.</p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  // DELETE HELPER FUNCTION
  async function fetchDelete(id) {
    try {
      let URL =
        process.env.NODE_ENV === "production"
          ? `https://backend-project-budgeting-app.onrender.com/transactions/${id}`
          : `http://localhost:3001/transactions/${id}`;
      await axios.delete(URL);
      window.location.reload();
    } catch (e) {
      console.log(e);
      return (
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Transactions Not Found
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <p>Oh No! Transactions not found! Please try again.</p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div>
      <h2 className="h2-title">Transactions</h2>
      <div className="table-container">
        <table id="transactions">
          <tbody>
            <tr>
              <th>Date</th>
              <th>Transaction Name</th>
              <th>Amount</th>
              <th>From</th>
              <th>Category</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>

            {budgetData.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>
                    <Link
                      className="budget-item-link"
                      to={`/transactions/${item.id}`}
                    >
                      {item.date}
                    </Link>
                  </td>

                  <td>
                    <Link
                      className="budget-item-link"
                      to={`/transactions/${item.id}`}
                    >
                      {item.item_name}
                    </Link>
                  </td>

                  <td>
                    <Link
                      className="budget-item-link"
                      to={`/transactions/${item.id}`}
                    >
                      {item.amount}
                    </Link>
                  </td>
                  <td>
                    <Link
                      className="budget-item-link"
                      to={`/transactions/${item.id}`}
                    >
                      {item.from}
                    </Link>
                  </td>
                  <td>
                    <Link
                      className="budget-item-link"
                      to={`/transactions/${item.id}`}
                    >
                      {item.category}
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn-bg-danger"
                      onClick={() => fetchDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

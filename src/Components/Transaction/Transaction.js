import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Transaction() {
  const { id } = useParams();

  const [budgetItemData, setBudgetItemData] = useState(null);

  useEffect(() => {
    fetchTransaction();
  }, []);

  async function fetchTransaction() {
    try {
      await axios
        .get(
          process.env.NODE_ENV === "production"
            ? `https://backend-project-budgeting-app.onrender.com/transactions/${id}`
            : `http://localhost:3001/transactions/${id}`
        )
        .then((response) => {
          setBudgetItemData(response.data);
        });
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
                  Transaction Not Found
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <p>Oh No! Transaction not found! Please try again.</p>
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
    <div className="mx-5">
      <h2 className="h2-title">{budgetItemData?.item_name}</h2>
      <div className="table-container">
        <table class="table table-bordered" id="logs">
          <tbody>
            <tr>
              <th>Date</th>
              <th>Transaction Name</th>
              <th>Amount</th>
              <th>From</th>
              <th>Category</th>
            </tr>
            <tr key={budgetItemData?.id}>
              <td>{budgetItemData?.date}</td>

              <td>{budgetItemData?.item_name}</td>

              <td>{budgetItemData?.amount}</td>
              <td>{budgetItemData?.from}</td>
              <td>{budgetItemData?.category}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

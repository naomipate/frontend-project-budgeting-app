import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateTransaction() {
  const [newBudgetItemData, setNewBudgetItemData] = React.useState({
    date: "",
    item_name: "",
    amount: "",
    from: "",
    category: "",
  });
  const navigate = useNavigate();

  //HELPER FUNCTIONS
  function handleChange(event) {
    setNewBudgetItemData({
      ...newBudgetItemData,
      [event.target.id]: event.target.value,
    });
  }
  function resetForm(event) {
    setNewBudgetItemData({
      date: "",
      item_name: "",
      amount: 0,
      from: "",
      category: "",
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      let result = await axios.post(
        process.env.NODE_ENV === "production"
          ? "https://backend-project-budgeting-app.onrender.com/transactions"
          : "http://localhost:3001/transactions",
        newBudgetItemData
      );

      // We reset the form and navigate back to the transactions page once the item has been created
      resetForm();
      navigate(`/transactions/${result.data.id}`);
    } catch (e) {
      console.error(e);
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
                <p>
                  Oh No! I can't work with an empty transaction! Please try
                  again.
                </p>
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
      <div>Create a New Transaction</div>
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Create New Budget Item</h2>
          <div className="table-container">
            <table id="logs">
              <tbody>
                <tr>
                  <th>Date</th>
                  <th>Transaction Name</th>
                  <th>Amount</th>
                  <th>From</th>
                  <th>Category</th>
                </tr>
                <tr key={newBudgetItemData?.id}>
                  <td>
                    {" "}
                    <input
                      type="text"
                      value={newBudgetItemData.date}
                      placeholder="YYYY-MM-DD"
                      onChange={(e) => handleChange(e)}
                      id="date"
                      required
                    />
                  </td>

                  <td>
                    {" "}
                    <input
                      type="text"
                      value={newBudgetItemData.name}
                      onChange={(e) => handleChange(e)}
                      placeholder="Monthly Income, Savings, etc."
                      id="item_name"
                      required
                    />
                  </td>

                  <td>
                    {" "}
                    <input
                      type="number"
                      value={newBudgetItemData.amount}
                      placeholder="0.00"
                      onChange={(e) => handleChange(e)}
                      id="amount"
                      required
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="text"
                      value={newBudgetItemData.from}
                      onChange={(e) => handleChange(e)}
                      placeholder="Employer, Shopping, etc."
                      id="from"
                      required
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="text"
                      value={newBudgetItemData.category}
                      onChange={(e) => handleChange(e)}
                      placeholder="Travel, Groceries, Savings"
                      id="category"
                      required
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateTransaction;

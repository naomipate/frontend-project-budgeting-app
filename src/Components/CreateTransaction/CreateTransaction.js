import React, { useEffect, useState } from "react";
import axios from "axios";

function CreateTransaction() {
  const [newBudgetItemData, setNewBudgetItemData] = useState([]);
  async function fetchCreateNewTransaction() {
    try {
      let result = await axios.post(
        `https://backend-project-budgeting-app.onrender.com/transactions/new`
      );

      setNewBudgetItemData(result.data);
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
    fetchCreateNewTransaction();
  }, []);

  return (
    <div>
      <div>CreateTransaction</div>
      <div></div>
    </div>
  );
}

export default CreateTransaction;

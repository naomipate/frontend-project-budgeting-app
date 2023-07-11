import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Put imported components here!
import NavBar from "./Components/NavBar/NavBar";
import Transactions from "./Components/Transactions/Transactions";
import Transaction from "./Components/Transaction/Transaction";
import CreateTransaction from "./Components/CreateTransaction/CreateTransaction";
import Edit from "./Components/Edit/Edit";

//App.css
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/transactions/:id" element={<Transaction />} />
        <Route path="/transactions/new" element={<CreateTransaction />} />
        <Route path="/transactions/edit/:id" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;

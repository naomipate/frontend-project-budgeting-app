import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Put imported components here!
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Transactions from "./Components/Transactions/Transactions";
import Transaction from "./Components/Transaction/Transaction";
import CreateTransaction from "./Components/CreateTransaction/CreateTransaction";

//App.css
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/transactions/:id" element={<Transaction />} />
        <Route path="/transactions/new" element={<CreateTransaction />} />
      </Routes>
    </Router>
  );
}

export default App;

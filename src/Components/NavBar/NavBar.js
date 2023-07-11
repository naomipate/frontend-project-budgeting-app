import { Link } from "react-router-dom";

export default function NavBar() {
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
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

import { Link } from "react-router-dom";
import "./ItemDetails.css";

function ItemDetails() {
  return (
    <div className="item-details-page">

      {/* SIDEBAR */}
      <aside className="item-details-sidebar">

        <div className="item-details-logo">
          <div className="item-details-logo-icon">
            🔍
          </div>

          <div>
            <h2>Lost &amp; Found</h2>
            <span>Reuniting what matters</span>
          </div>
        </div>

        <nav className="item-details-nav">

          <Link to="/dashboard" className="item-details-nav-item">
            <span>🏠</span>
            Home
          </Link>

          <Link to="/lost-items" className="item-details-nav-item">
            <span>🔎</span>
            Lost Items
          </Link>

          <Link to="/found-items" className="item-details-nav-item">
            <span>📦</span>
            Found Items
          </Link>

          <Link to="/report-lost-item" className="item-details-nav-item">
            <span>📝</span>
            My Reports
          </Link>

          <Link to="/dashboard" className="item-details-nav-item">
            <span>✓</span>
            My Claims
          </Link>

        </nav>

        <div className="item-details-sidebar-bottom">

          <Link to="/" className="item-details-logout">
            <span>🚪</span>
            Logout
          </Link>

        </div>

      </aside>


      {/* MAIN CONTENT */}
      <main className="item-details-main">

        <header className="item-details-header">

          <div>
            <h1>Item Details</h1>
            <p>View detailed information about this item.</p>
          </div>

          <div className="item-details-user">

            <div className="item-details-avatar">
              👤
            </div>

            <div>
              <strong>John Doe</strong>
              <span>Welcome back</span>
            </div>

          </div>

        </header>


        {/* ITEM DETAILS CARD */}
        <section className="item-details-card">

          <div className="item-details-image">
            🎒
          </div>

          <div className="item-details-content">

            <span className="item-details-status">
              Lost Item
            </span>

            <h2>Black Backpack</h2>

            <p className="item-details-description">
              A black backpack reported as lost. Please check the
              details below if you have found this item.
            </p>

            <div className="item-details-info">

              <div>
                <span>Category</span>
                <strong>Bags</strong>
              </div>

              <div>
                <span>Location</span>
                <strong>College Campus</strong>
              </div>

              <div>
                <span>Date Reported</span>
                <strong>September 28, 2026</strong>
              </div>

              <div>
                <span>Color</span>
                <strong>Black</strong>
              </div>

            </div>

            <button className="item-details-claim-button">
              Claim This Item
            </button>

          </div>

        </section>

      </main>

    </div>
  );
}

export default ItemDetails;
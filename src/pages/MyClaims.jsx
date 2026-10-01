import { Link } from "react-router-dom";
import "./MyClaims.css";

function MyClaims() {
  return (
    <div className="my-claims-page">

      {/* SIDEBAR */}
      <aside className="my-claims-sidebar">

        <div className="my-claims-logo">
          <div className="my-claims-logo-icon">
            🔍
          </div>

          <div>
            <h2>Lost &amp; Found</h2>
            <span>Reuniting what matters</span>
          </div>
        </div>

        <nav className="my-claims-nav">

          <Link to="/dashboard" className="my-claims-nav-item">
            <span>🏠</span>
            Dashboard
          </Link>

          <Link to="/lost-items" className="my-claims-nav-item">
            <span>🔎</span>
            Lost Items
          </Link>

          <Link to="/found-items" className="my-claims-nav-item">
            <span>📦</span>
            Found Items
          </Link>

          <Link to="/item-details" className="my-claims-nav-item">
            <span>📄</span>
            Item Details
          </Link>

          <Link to="/my-reports" className="my-claims-nav-item">
            <span>📝</span>
            My Reports
          </Link>

          <Link
            to="/my-claims"
            className="my-claims-nav-item active"
          >
            <span>✓</span>
            My Claims
          </Link>

          <Link to="/report-found-item" className="my-claims-nav-item">
            <span>📦</span>
            Report Found Item
          </Link>

        </nav>

        <div className="my-claims-sidebar-bottom">

          <Link to="/" className="my-claims-logout">
            <span>🚪</span>
            Logout
          </Link>

        </div>

      </aside>

      {/* MAIN CONTENT */}
      <main className="my-claims-main">

        {/* HEADER */}
        <header className="my-claims-header">

          <div>
            <h1>My Claims</h1>
            <p>View and manage the items you have claimed.</p>
          </div>

          <div className="my-claims-user">

            <div className="my-claims-avatar">
              👤
            </div>

            <div>
              <strong>User</strong>
              <span>Welcome back</span>
            </div>

          </div>

        </header>

        {/* CLAIMS */}
        <section className="my-claims-card">

          <div className="my-claims-title">

            <div>
              <h2>Your Claims</h2>
              <p>Items you have submitted claims for.</p>
            </div>

          </div>

          {/* CLAIM 1 */}
          <div className="my-claim-item">

            <div className="my-claim-image">
              🎒
            </div>

            <div className="my-claim-info">
              <h3>Black Backpack</h3>
              <p>
                Claim submitted September 29, 2026
              </p>
              <span className="my-claim-location">
                📍 College Campus
              </span>
            </div>

            <span className="my-claim-status pending">
              Pending
            </span>

            <Link
              to="/item-details"
              className="my-claim-view-button"
            >
              View Details
            </Link>

          </div>

          {/* CLAIM 2 */}
          <div className="my-claim-item">

            <div className="my-claim-image">
              📱
            </div>

            <div className="my-claim-info">
              <h3>Mobile Phone</h3>
              <p>
                Claim submitted September 25, 2026
              </p>
              <span className="my-claim-location">
                📍 Library
              </span>
            </div>

            <span className="my-claim-status approved">
              Approved
            </span>

            <Link
              to="/item-details"
              className="my-claim-view-button"
            >
              View Details
            </Link>

          </div>

          {/* CLAIM 3 */}
          <div className="my-claim-item">

            <div className="my-claim-image">
              🎧
            </div>

            <div className="my-claim-info">
              <h3>Wireless Headphones</h3>
              <p>
                Claim submitted September 21, 2026
              </p>
              <span className="my-claim-location">
                📍 Computer Lab
              </span>
            </div>

            <span className="my-claim-status rejected">
              Rejected
            </span>

            <Link
              to="/item-details"
              className="my-claim-view-button"
            >
              View Details
            </Link>

          </div>

        </section>

      </main>

    </div>
  );
}

export default MyClaims;
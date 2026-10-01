import { Link } from "react-router-dom";
import "./MyReports.css";

function MyReports() {
  return (
    <div className="my-reports-page">

      {/* SIDEBAR */}
      <aside className="my-reports-sidebar">

        <div className="my-reports-logo">
          <div className="my-reports-logo-icon">
            🔍
          </div>

          <div>
            <h2>Lost &amp; Found</h2>
            <span>Reuniting what matters</span>
          </div>
        </div>

        <nav className="my-reports-nav">

          <Link to="/dashboard" className="my-reports-nav-item">
            <span>🏠</span>
            Dashboard
          </Link>

          <Link to="/lost-items" className="my-reports-nav-item">
            <span>🔎</span>
            Lost Items
          </Link>

          <Link to="/found-items" className="my-reports-nav-item">
            <span>📦</span>
            Found Items
          </Link>

          <Link to="/item-details" className="my-reports-nav-item">
            <span>📄</span>
            Item Details
          </Link>

          <Link
            to="/report-lost-item"
            className="my-reports-nav-item active"
          >
            <span>📝</span>
            My Reports
          </Link>

          <Link to="/report-found-item" className="my-reports-nav-item">
            <span>📦</span>
            Report Found Item
          </Link>

        </nav>

        <div className="my-reports-sidebar-bottom">

          <Link to="/" className="my-reports-logout">
            <span>🚪</span>
            Logout
          </Link>

        </div>

      </aside>


      {/* MAIN CONTENT */}
      <main className="my-reports-main">

        {/* HEADER */}
        <header className="my-reports-header">

          <div>
            <h1>My Reports</h1>
            <p>View and manage the items you have reported.</p>
          </div>

          <div className="my-reports-user">

            <div className="my-reports-avatar">
              👤
            </div>

            <div>
              <strong>User</strong>
              <span>Welcome back</span>
            </div>

          </div>

        </header>


        {/* REPORTS */}
        <section className="my-reports-card">

          <div className="my-reports-title">
            <div>
              <h2>Your Reports</h2>
              <p>Items you have reported as lost or found.</p>
            </div>

            <Link
              to="/report-lost-item"
              className="my-reports-add-button"
            >
              + Report Item
            </Link>
          </div>


          {/* REPORT 1 */}
          <div className="my-report-item">

            <div className="my-report-image">
              🎒
            </div>

            <div className="my-report-info">

              <h3>Black Backpack</h3>

              <p>
                Lost Item • Reported September 28, 2026
              </p>

              <span className="my-report-location">
                📍 College Campus
              </span>

            </div>

            <span className="my-report-status pending">
              Pending
            </span>

            <Link
              to="/item-details"
              className="my-report-view-button"
            >
              View Details
            </Link>

          </div>


          {/* REPORT 2 */}
          <div className="my-report-item">

            <div className="my-report-image">
              📱
            </div>

            <div className="my-report-info">

              <h3>Mobile Phone</h3>

              <p>
                Lost Item • Reported September 23, 2026
              </p>

              <span className="my-report-location">
                📍 Library
              </span>

            </div>

            <span className="my-report-status recovered">
              Recovered
            </span>

            <Link
              to="/item-details"
              className="my-report-view-button"
            >
              View Details
            </Link>

          </div>


          {/* REPORT 3 */}
          <div className="my-report-item">

            <div className="my-report-image">
              🎧
            </div>

            <div className="my-report-info">

              <h3>Wireless Headphones</h3>

              <p>
                Found Item • Reported September 20, 2026
              </p>

              <span className="my-report-location">
                📍 Computer Lab
              </span>

            </div>

            <span className="my-report-status pending">
              Pending
            </span>

            <Link
              to="/item-details"
              className="my-report-view-button"
            >
              View Details
            </Link>

          </div>

        </section>

      </main>

    </div>
  );
}

export default MyReports;
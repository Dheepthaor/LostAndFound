import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-page">

      {/* SIDEBAR */}
      <aside className="dashboard-sidebar">

        <div className="dashboard-logo">
          <div className="dashboard-logo-icon">🔍</div>

          <div>
            <h2>Lost &amp; Found</h2>
            <span>Reuniting what matters</span>
          </div>
        </div>

        <nav className="dashboard-nav">

          <Link to="/dashboard" className="dashboard-nav-item active">
            <span>🏠</span>
            Dashboard
          </Link>

          <Link to="/lost-items" className="dashboard-nav-item">
            <span>🔎</span>
            Lost Items
          </Link>

          <Link to="/report-lost-item" className="dashboard-nav-item">
            <span>📝</span>
            Report Lost Item
          </Link>

        </nav>

        <div className="dashboard-sidebar-bottom">

          <Link to="/" className="dashboard-logout">
            <span>🚪</span>
            Logout
          </Link>

        </div>

      </aside>


      {/* MAIN CONTENT */}
      <main className="dashboard-main">

        {/* HEADER */}
        <header className="dashboard-header">

          <div>
            <h1>Dashboard</h1>
            <p>Welcome back! Here's what's happening with your lost items.</p>
          </div>

          <div className="dashboard-user">
            <div className="dashboard-avatar">
              👤
            </div>

            <div>
              <strong>User</strong>
              <span>Welcome back</span>
            </div>
          </div>

        </header>


        {/* STAT CARDS */}
        <section className="dashboard-stats">

          <div className="dashboard-card">
            <div className="dashboard-card-icon blue">
              🔍
            </div>

            <div>
              <span>Total Lost Items</span>
              <h3>12</h3>
            </div>
          </div>


          <div className="dashboard-card">
            <div className="dashboard-card-icon orange">
              ⏳
            </div>

            <div>
              <span>Pending Claims</span>
              <h3>5</h3>
            </div>
          </div>


          <div className="dashboard-card">
            <div className="dashboard-card-icon green">
              ✓
            </div>

            <div>
              <span>Items Recovered</span>
              <h3>7</h3>
            </div>
          </div>

        </section>


        {/* QUICK ACTIONS */}
        <section className="dashboard-section">

          <div className="dashboard-section-title">
            <div>
              <h2>Quick Actions</h2>
              <p>Manage your lost and found items</p>
            </div>
          </div>


          <div className="dashboard-actions">

            <Link
              to="/report-lost-item"
              className="dashboard-action-card"
            >
              <div className="action-icon purple">
                📝
              </div>

              <div>
                <h3>Report Lost Item</h3>
                <p>
                  Report an item you have lost.
                </p>
              </div>

              <span className="action-arrow">→</span>
            </Link>


            <Link
              to="/lost-items"
              className="dashboard-action-card"
            >
              <div className="action-icon blue">
                🔎
              </div>

              <div>
                <h3>Browse Lost Items</h3>
                <p>
                  Search through reported items.
                </p>
              </div>

              <span className="action-arrow">→</span>
            </Link>

          </div>

        </section>


        {/* RECENT ITEMS */}
        <section className="dashboard-section">

          <div className="dashboard-section-heading">

            <div>
              <h2>Recent Lost Items</h2>
              <p>Your recently reported items</p>
            </div>

            <Link to="/lost-items">
              View All
            </Link>

          </div>


          <div className="recent-items">

            <div className="recent-item">

              <div className="recent-item-image">
                🎒
              </div>

              <div className="recent-item-info">
                <h3>Black Backpack</h3>
                <p>Reported 2 days ago</p>
              </div>

              <span className="status pending">
                Pending
              </span>

            </div>


            <div className="recent-item">

              <div className="recent-item-image">
                📱
              </div>

              <div className="recent-item-info">
                <h3>Mobile Phone</h3>
                <p>Reported 5 days ago</p>
              </div>

              <span className="status recovered">
                Recovered
              </span>

            </div>


            <div className="recent-item">

              <div className="recent-item-image">
                🎧
              </div>

              <div className="recent-item-info">
                <h3>Wireless Headphones</h3>
                <p>Reported 1 week ago</p>
              </div>

              <span className="status pending">
                Pending
              </span>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;
import { Link } from "react-router-dom";
import "./ReportLostItem.css";

function ReportLostItem() {
  return (
    <div className="report-page">

      {/* SIDEBAR */}
      <aside className="report-sidebar">

        <div className="report-logo">

          <div className="report-logo-icon">
            🔍
          </div>

          <div>
            <h2>Lost &amp; Found</h2>
            <span>Reuniting what matters</span>
          </div>

        </div>


        <nav className="report-nav">

          <Link to="/dashboard" className="report-nav-item">
            <span>🏠</span>
            Home
          </Link>

          <Link to="/lost-items" className="report-nav-item">
            <span>🔎</span>
            Lost Items
          </Link>

          <Link to="/found-items" className="report-nav-item">
            <span>📦</span>
            Found Items
          </Link>

          <Link
            to="/report-lost-item"
            className="report-nav-item active"
          >
            <span>📝</span>
            My Reports
          </Link>

          <Link to="/dashboard" className="report-nav-item">
            <span>✓</span>
            My Claims
          </Link>

        </nav>


        <div className="report-sidebar-bottom">

          <Link to="/" className="report-logout">
            <span>🚪</span>
            Logout
          </Link>

        </div>

      </aside>


      {/* MAIN */}
      <main className="report-main">

        {/* HEADER */}
        <header className="report-header">

          <div>
            <h1>Report Lost Item</h1>

            <p>
              Provide details about the item you lost.
            </p>
          </div>

          <div className="report-user">

            <div className="report-avatar">
              👤
            </div>

            <div>
              <strong>John Doe</strong>
              <span>Welcome back</span>
            </div>

          </div>

        </header>


        {/* FORM */}
        <section className="report-card">

          <div className="report-form">


            {/* ITEM NAME */}
            <div className="report-field">

              <label>
                Item Name *
              </label>

              <input
                type="text"
                placeholder="Enter item name"
              />

            </div>


            {/* CATEGORY */}
            <div className="report-field">

              <label>
                Category *
              </label>

              <select>
                <option value="">
                  Select category
                </option>

                <option>
                  Electronics
                </option>

                <option>
                  Accessories
                </option>

                <option>
                  Documents
                </option>

                <option>
                  Bags
                </option>

                <option>
                  Clothing
                </option>

                <option>
                  Other
                </option>

              </select>

            </div>


            {/* DESCRIPTION */}
            <div className="report-field report-description">

              <label>
                Description *
              </label>

              <textarea
                placeholder="Describe the item in detail..."
              />

            </div>


            {/* LOCATION */}
            <div className="report-field">

              <label>
                Location Lost *
              </label>

              <input
                type="text"
                placeholder="Enter location"
              />

            </div>


            {/* DATE */}
            <div className="report-field">

              <label>
                Date Lost *
              </label>

              <input
                type="date"
              />

            </div>


            {/* COLOR */}
            <div className="report-field">

              <label>
                Color
              </label>

              <input
                type="text"
                placeholder="Enter color"
              />

            </div>


            {/* UPLOAD */}
            <div className="report-field">

              <label>
                Upload Image
              </label>

              <input
                type="file"
                accept="image/*"
              />

            </div>


            {/* IMAGE BOX */}
            <div className="report-image-box">

              <div className="report-image-icon">
                🖼️
              </div>

              <p>
                Add item image
              </p>

            </div>


            {/* BUTTONS */}
            <div className="report-buttons">

              <button
                type="button"
                className="cancel-button"
              >
                Cancel
              </button>

              <button
                type="button"
                className="submit-button"
              >
                Submit Report
              </button>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default ReportLostItem;
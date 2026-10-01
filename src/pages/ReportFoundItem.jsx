import { Link } from "react-router-dom";
import "./reportfounditem.css";

function ReportFoundItem() {
  return (
    <div className="found-report-page">

      {/* SIDEBAR */}
      <aside className="found-report-sidebar">

        <div className="found-report-logo">
          <div className="found-report-logo-icon">
            🔍
          </div>

          <div>
            <h2>Lost &amp; Found</h2>
            <span>Reuniting what matters</span>
          </div>
        </div>

        <nav className="found-report-nav">

          <Link to="/dashboard" className="found-report-nav-item">
            <span>🏠</span>
            Home
          </Link>

          <Link to="/lost-items" className="found-report-nav-item">
            <span>🔎</span>
            Lost Items
          </Link>

          <Link to="/found-items" className="found-report-nav-item">
            <span>📦</span>
            Found Items
          </Link>

          <Link to="/report-lost-item" className="found-report-nav-item active">
            <span>📝</span>
            My Reports
          </Link>

          <Link to="/dashboard" className="found-report-nav-item">
            <span>✓</span>
            My Claims
          </Link>

        </nav>

        <div className="found-report-sidebar-bottom">
  <Link to="/" className="found-report-logout">
    <span>🚪</span>
    Logout
  </Link>
</div>

      </aside>


      {/* MAIN */}
      <main className="found-report-main">

       <header className="report-header">

  <div>
    <h1>Report Found Item</h1>
    <p>Provide details about the item you found.</p>
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
        <section className="found-report-card">

          <div className="found-report-form">

            {/* ITEM NAME */}
            <div className="found-report-field">

              <label>
                Item Name *
              </label>

              <input
                type="text"
                placeholder="Enter item name"
              />

            </div>


            {/* CATEGORY */}
            <div className="found-report-field">

              <label>
                Category *
              </label>

              <select defaultValue="">

                <option value="">
                  Select category
                </option>

                <option>Electronics</option>
                <option>Accessories</option>
                <option>Documents</option>
                <option>Bags</option>
                <option>Clothing</option>
                <option>Other</option>

              </select>

            </div>


            {/* DESCRIPTION */}
            <div className="found-report-field found-report-description">

              <label>
                Description *
              </label>

              <textarea
                placeholder="Describe the item in detail..."
              />

            </div>


            {/* LOCATION FOUND */}
            <div className="found-report-field">

              <label>
                Location Found *
              </label>

              <input
                type="text"
                placeholder="Enter location"
              />

            </div>


            {/* DATE FOUND */}
            <div className="found-report-field">

              <label>
                Date Found *
              </label>

              <input
                type="date"
              />

            </div>


            {/* COLOR */}
            <div className="found-report-field">

              <label>
                Color
              </label>

              <input
                type="text"
                placeholder="Enter color"
              />

            </div>


            {/* UPLOAD IMAGE */}
            <div className="found-report-field">

              <label>
                Upload Image
              </label>

              <input
                type="file"
                accept="image/*"
              />

            </div>


            {/* IMAGE BOX */}
            <div className="found-report-image-box">

              <div className="found-report-image-icon">
                🖼️
              </div>

              <p>
                Add item image
              </p>

            </div>


            {/* BUTTONS */}
            <div className="found-report-buttons">

              <button
                type="button"
                className="found-cancel-button"
              >
                Cancel
              </button>

              <button
                type="button"
                className="found-submit-button"
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

export default ReportFoundItem;

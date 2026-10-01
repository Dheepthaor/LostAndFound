import { Link } from "react-router-dom";
import "./Items.css";

function FoundItems() {
  const items = [
    {
      image: "👜",
      name: "Black Bag",
      category: "Bags",
      location: "Canteen",
      date: "27 Sep 2026",
    },
    {
      image: "📱",
      name: "Mobile Phone",
      category: "Electronics",
      location: "Library",
      date: "26 Sep 2026",
    },
    {
      image: "⌚",
      name: "Watch",
      category: "Accessories",
      location: "Sports Ground",
      date: "25 Sep 2026",
    },
    {
      image: "🎧",
      name: "Earphones",
      category: "Electronics",
      location: "Cafeteria",
      date: "24 Sep 2026",
    },
  ];

  return (
    <div className="items-page">

      <aside className="items-sidebar">

        <div className="items-logo">
          <div className="items-logo-icon">🔍</div>

          <div>
            <h2>Lost &amp; Found</h2>
            <span>Reuniting what matters</span>
          </div>
        </div>

        <nav className="items-nav">

          <Link to="/dashboard" className="items-nav-item">
            <span>🏠</span>
            Home
          </Link>

          <Link to="/lost-items" className="items-nav-item">
            <span>🔎</span>
            Lost Items
          </Link>

          <Link
            to="/found-items"
            className="items-nav-item active"
          >
            <span>📦</span>
            Found Items
          </Link>

          <Link
            to="/report-lost-item"
            className="items-nav-item"
          >
            <span>📝</span>
            My Reports
          </Link>

          <Link to="/dashboard" className="items-nav-item">
            <span>✓</span>
            My Claims
          </Link>

        </nav>

        <div className="items-sidebar-bottom">

          <Link to="/" className="items-logout">
            <span>🚪</span>
            Logout
          </Link>

        </div>

      </aside>


      <main className="items-main">

        <header className="items-header">

          <div>
            <h1>Found Items</h1>

            <p>
              Browse and search found items reported by users.
            </p>
          </div>

          <div className="items-user">

            <div className="items-avatar">
              👤
            </div>

            <div>
              <strong>John Doe</strong>
              <span>Welcome back</span>
            </div>

          </div>

        </header>


        <section className="items-search">

          <div className="search-box">

            <span>🔍</span>

            <input
              type="text"
              placeholder="Search found items..."
            />

          </div>

          <select>
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Accessories</option>
            <option>Bags</option>
          </select>

          <select>
            <option>All Locations</option>
            <option>Canteen</option>
            <option>Library</option>
            <option>Cafeteria</option>
          </select>

          <button>
            Search
          </button>

        </section>


        <section className="items-grid">

          {items.map((item, index) => (
            <div className="item-card" key={index}>

              <div className="item-image">
                <span>{item.image}</span>
              </div>

              <div className="item-content">

                <h3>{item.name}</h3>

                <p>
                  <span>●</span>
                  {item.category}
                </p>

                <p>
                  <span>⌖</span>
                  {item.location}
                </p>

                <p>
                  <span>◷</span>
                  {item.date}
                </p>

                <button className="view-button">
                  View Details
                </button>

              </div>

            </div>
          ))}

        </section>

      </main>

    </div>
  );
}

export default FoundItems;
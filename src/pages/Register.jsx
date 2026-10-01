import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register-page">

      {/* LEFT SIDE */}
      <div className="register-left">

        <div className="register-icon">
          🔍
        </div>

        <h1>Lost &amp; Found</h1>

        <p>
          Create your account to
          <br />
          reconnect lost or found items
          <br />
          and keep track of your claims.
        </p>

        <div className="register-illustration">
          <div className="register-circle">
            🔍
          </div>

          <div className="register-box">
            📦
          </div>

          <div className="register-lock">
            🔒
          </div>
        </div>

      </div>


      {/* RIGHT SIDE */}
      <div className="register-right">

        <div className="register-form">

          <h2>Create Account</h2>

          <p className="register-subtitle">
            Join our community and help reunite lost items.
          </p>


          <form>

            {/* FULL NAME */}
            <div className="register-group">
              <label htmlFor="fullName">
                Full Name
              </label>

              <div className="register-input">
                <span>👤</span>

                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>


            {/* EMAIL */}
            <div className="register-group">
              <label htmlFor="email">
                Email
              </label>

              <div className="register-input">
                <span>✉</span>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>


            {/* PHONE */}
            <div className="register-group">
              <label htmlFor="phone">
                Phone Number
              </label>

              <div className="register-input">
                <span>📞</span>

                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>


            {/* PASSWORD */}
            <div className="register-group">
              <label htmlFor="password">
                Password
              </label>

              <div className="register-input">
                <span>🔒</span>

                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>


            {/* CONFIRM PASSWORD */}
            <div className="register-group">
              <label htmlFor="confirmPassword">
                Confirm Password
              </label>

              <div className="register-input">
                <span>🔒</span>

                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>


            <button
              type="submit"
              className="register-submit"
            >
              Register
            </button>

          </form>


          <p className="register-login">
            Already have an account?{" "}

            <Link to="/">
              Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;
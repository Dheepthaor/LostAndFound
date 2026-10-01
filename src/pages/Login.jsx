function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    window.location.href = "/dashboard";
  };

  const handleRegister = () => {
    window.location.href = "/register";
  };

  return (
    <div className="login-page">

      {/* LEFT SIDE */}
      <div className="login-left">

        <div className="login-brand-icon">
          <span>⌕</span>
        </div>

        <h1>Lost &amp; Found</h1>

        <p className="brand-text">
          Reuniting Lost Items
          <br />
          with Their Owners
        </p>

        <div className="login-illustration">
          <div className="bag">
            <div className="bag-handle"></div>
            <div className="bag-top"></div>
            <div className="bag-body">
              <div className="bag-pocket"></div>
              <div className="bag-dot"></div>
            </div>
          </div>

          <div className="phone">
            <div className="phone-screen">
              <div className="app-icon one"></div>
              <div className="app-icon two"></div>
              <div className="app-icon three"></div>
              <div className="app-icon four"></div>
            </div>
          </div>

          <div className="small-object"></div>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="login-right">

        <div className="login-form-wrapper">

          <h2>Login</h2>

          <p className="login-subtitle">
            Welcome back! Please login to your account.
          </p>

          <form onSubmit={handleLogin}>

            {/* EMAIL */}
            <div className="form-group">
              <label>Email or Username</label>

              <div className="input-container">
                <span className="input-icon">✉</span>

                <input
                  type="text"
                  placeholder="Enter your email or username"
                  required
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="form-group password-group">
              <label>Password</label>

              <div className="input-container">
                <span className="input-icon">🔒</span>

                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                />

                <span className="eye-icon">◉</span>
              </div>
            </div>

            {/* FORGOT PASSWORD */}
            <div className="forgot-password">
              Forgot password?
            </div>

            {/* LOGIN */}
            <button
              type="submit"
              className="login-button"
            >
              Login
            </button>

          </form>

          {/* REGISTER */}
          <p className="register-text">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={handleRegister}
              className="register-button"
            >
              Register
            </button>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;
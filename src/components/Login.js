import React, { useState } from "react";
// import Cookie from "js-cookie";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);

  const handleSubmit = event => {
    if (email === "test@unsircle.com" && password === "test@unsircle.com") {
      onLogin();
    } else {
      setError(true);
    }
    event.preventDefault();
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleInputFocus = () => {
    setError(false);
  };

  return (
    <React.Fragment>
      <div style={{ marginTop: 200 }}>
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      onChange={handleEmailChange}
                      onFocus={handleInputFocus}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      onChange={handlePasswordChange}
                      onFocus={handleInputFocus}
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-primary btn-block">
                    Login
                  </button>
                </form>
              </div>
            </div>
            {!error || (
              <div
                className="alert alert-danger"
                role="alert"
                style={{ marginTop: 20 }}
              >
                Email/password salah
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;

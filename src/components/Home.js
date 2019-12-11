import React from "react";
// import Cookie from "js-cookie";

function Home({ onLogout }) {
  const logout = () => {
    onLogout();
  };

  return (
    <div className="row" style={{ marginTop: 200 }}>
      <div className="col-md-6 offset-md-3">
        <div>Selamat datang, test@unsircle.com</div>
        <button
          type="button"
          className="btn btn-danger btn-block"
          onClick={logout}
          style={{ marginTop: 20 }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;

import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext.jsx";

const Layout = () => {
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <div>
      <nav className="topnav-centered" style={styles.navbar}>
        {console.log(`layout logged in status ${isLoggedIn}`)}
        {isLoggedIn ? (
          <>
            <Link to="/profile" style={styles.link}>
              Profile
            </Link>
            <Link to="/dashboard" style={styles.link}>
              Dashboard
            </Link>
            <Link to="/users" style={styles.link}>
              Dashboard
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.link}>
              Login
            </Link>
            <Link to="/register" style={styles.link}>
              Register
            </Link>
            <Link to="/profile" style={styles.link}>
              Profile
            </Link>
            <Link to="/dashboard" style={styles.link}>
              Dashboard
            </Link>
          </>
        )}
      </nav>
      <main style={styles.main}>
        <Outlet /> {/* This will render the matched route's component */}
      </main>
    </div>
  );
};

const styles = {
  navbar: {
    display: "flex",
    gap: "1rem",
    backgroundColor: "green",
    padding: "1rem",
    position: "fixed",
    top: 0,
    width: 800,
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
  main: {
    padding: "2rem",
  },
};

export default Layout;

import React, { useState } from "react";
import RegistrationPage from "../pages/RegistrationPage";
import Login from "./Login.jsx";
import Registration from "../components/Registration.jsx";
import "../App.css";

function Navbar() {
  const [showComponent, setShowComponent] = useState(false);
  const [selected, setSelected] = useState("");

  const handleClick = (selected) => {
    setShowComponent(true);
    switch (selected) {
      case "registration":
        console.log("in case reg....");
        return <Registration />;
      case "login":
        return <Login />;
      // case 'profile':
      //   return  <Profile />;
      default:
        return "";
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-btn-container">
          <button
            className="nav-btn"
            onClick={() => handleClick("registration")}
          >
            Registration
            {/* {showComponent && <Registration />} */}
          </button>

          <button
            className="nav-btn"
            onClick={() => handleClick(setSelected("login"))}
          >
            Login
            {showComponent && <Login />}
          </button>
          {/* {showComponent && <Login />} */}
          <button className="nav-btn" onClick={() => handleClick("profile")}>
            Profile
          </button>
          {/* {showComponent && <Profile />} */}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

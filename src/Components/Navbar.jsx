import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import { useUserStates } from "../Context/Context";

const Navbar = () => {
  const { dispatch, state } = useUserStates();
  const handleTheme = () => {
    dispatch({
      type: "TOGGLE_THEME",
    });
  };

  const clase = state.theme === "light" ? "light" : "dark";

  return (
    <nav className={clase}>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Favs</Link>
      <button onClick={handleTheme}>Change theme</button>
    </nav>
  );
};

export default Navbar;

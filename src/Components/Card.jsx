import React from "react";
import { Link } from "react-router-dom";
import { useUserStates } from "../Context/Context";
import { type } from "@testing-library/user-event/dist/type";
import DOC from "../img/doctor.jpg";

const Card = ({ user }) => {
  const {
    dispatch,
    state: { favs },
  } = useUserStates();

  const findFav = favs.find((fav) => fav.id === user.id);
  const addFav = () => {
    //const lista = JSON.parse(localStorage.getItem("favs"));
    // setFavs((favs) => [...favs, user]);
    // if (findFav) {
    //   dispatch({ type: "DELETE_FAV", payload: user });
    // } else {
    //   dispatch({ type: "ADD_FAV", payload: user });
    // }
    dispatch({ type: findFav ? "DELETE_FAV" : "ADD_FAV", payload: user });
  };

  return (
    <div className="card">
      <Link to={`/detail/${user.id}`}>
        <img src={DOC} style={{ width: 150 }} alt="imagen doctor" />
        <h2>{user.name}</h2>
        <h4>{user.username}</h4>
        <h4>{user.id}</h4>
      </Link>
      <button onClick={addFav} className="favButton">
        {findFav ? "🦷" : "Add fav"}
      </button>
    </div>
  );
};

export default Card;

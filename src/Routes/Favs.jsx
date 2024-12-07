import React from "react";
import Card from "../Components/Card";
import { useUserStates } from "../Context/Context";

const Favs = () => {
  const {
    state: { favs, theme },
  } = useUserStates();
  const clase = theme === "light" ? "light" : "dark";
  return (
    <div className={clase}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Favs;

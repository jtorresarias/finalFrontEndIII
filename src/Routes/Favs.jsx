import React from "react";
import Card from "../Components/Card";
import { useUserStates } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {
    state: { favs },
  } = useUserStates();

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default Favs;

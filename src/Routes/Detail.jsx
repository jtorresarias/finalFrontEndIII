import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOC from "../img/doctor.jpg";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [user, setUser] = useState({});
  const params = useParams();
  const url = "https://jsonplaceholder.typicode.com/users/" + params.id;

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res);
      setUser(res.data);
    });
  }, []);

  return (
    <>
      <h1>Detail Dentist id </h1>
      <img src={DOC} style={{ width: 150 }} alt="imagen doctor" />
      <h2>Nombre: {user.name}</h2>
      <h4>Telefono: {user.phone}</h4>
      <h4>Email: {user.email}</h4>
      <h4>WebSite: {user.website}</h4>
    </>
  );
};

export default Detail;

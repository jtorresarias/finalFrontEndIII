import React, { useState } from "react";
import Message from "../Components/Message";

const Form = () => {
  const [user, setUser] = useState({
    nombre: "",
    email: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const regexNum = /[0-9]/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (user.nombre.length >= 5 && regexEmail.test(user.email)) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      {show ? (
        <Message nombre={user.nombre} />
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input
            type="text"
            onChange={(event) =>
              setUser({ ...user, nombre: event.target.value })
            }
          />
          <label>Email:</label>
          <input
            type="text"
            onChange={(event) =>
              setUser({ ...user, email: event.target.value })
            }
          />
          <button>Enviar</button>
          {error ? (
            <h4 style={{ color: "orange" }}>
              Por favor coloque la informacion completa
            </h4>
          ) : null}
        </form>
      )}
    </div>
  );
};

export default Form;

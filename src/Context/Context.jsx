import React, { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { reducer } from "../Reducers/reducer";
import { type } from "@testing-library/user-event/dist/type";

const UserStates = createContext();
const listaFav = JSON.parse(localStorage.getItem("favs")) || [];

const initialState = {
  favs: listaFav,
  users: [],
  theme: "light",
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //const [favs, setFavs] = useState(listaFav);
  //const [users, setUsers] = useState([]);
  //const [theme, setTheme] = useState("");
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    axios(url).then((res) => {
      console.log(res);
      console.log(res.data);
      dispatch({ type: "GET_USERS", payload: res.data });
      //setUsers(res.data);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  return (
    <UserStates.Provider value={{ state, dispatch }}>
      {children}
    </UserStates.Provider>
  );
};

export default Context;

export const useUserStates = () => useContext(UserStates);

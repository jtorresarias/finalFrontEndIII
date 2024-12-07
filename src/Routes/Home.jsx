import Card from "../Components/Card";
import { useUserStates } from "../Context/Context.jsx";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {
    state: { users, theme },
  } = useUserStates();

  const clase = theme === "light" ? "light" : "dark";

  return (
    <main className={clase}>
      <h1>Home</h1>
      <div className="card-grid">
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </main>
  );
};

export default Home;

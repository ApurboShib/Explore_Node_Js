import "./App.css";
import User from "./components/User/User";
const userPromise = fetch("http://localhost:5001/users").then((res) =>
  res.json()
);
function App() {
  return (
    <>
      <h1>User Management Applications</h1>
      <User userPromise={userPromise}></User>
    </>
  );
}

export default App;

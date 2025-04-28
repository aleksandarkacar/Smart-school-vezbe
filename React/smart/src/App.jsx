import axios from "axios";
import { useEffect, useState } from "react";
import UserShowcase from "./components/UserShowcase";
import Adder from "./components/Adder";

export default function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUsers = async () => {
    try {
      const url =
        "https://raw.githubusercontent.com/nkezic/f1/refs/heads/main/Users.json";
      const response = await axios.get(url);
      setUsers(response.data);
    } catch (error) {
      console.log("Error getting users", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (isLoading) {
    return <h2>Page is Loading...</h2>;
  }

  return (
    <>
      <div className="user-showcase-wrapper">
        <UserShowcase users={users} />
      </div>
      <div className="adder-wrapper">
        <Adder />
      </div>
    </>
  );
}

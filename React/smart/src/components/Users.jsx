import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Loader from "./Loader";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUsers();
  }, []);

  const navigate = useNavigate();

  const getUsers = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await axios.get(url);
    console.log(response);
    setUsers(response.data);
    try {
    } catch (error) {
      console.log("Error getting users", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClickDetails = (id) => {
    console.log(id);
    const linkTo = `/user/${id}`;
    navigate(linkTo);
  };

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <>
      <h1>Users</h1>
      <div className="user-wrapper">
        {users.map((user) => {
          return (
            <div
              key={user.id}
              className="user-card"
              onClick={() => {
                handleClickDetails(user.id);
              }}
            >
              <p>{user.name}</p>
              <h3>Email: {user.email}</h3>
              <h3>Website: {user.website}</h3>
              <h4>City: {user.address.city}</h4>
              <h4>Company name: {user.company.name}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
}

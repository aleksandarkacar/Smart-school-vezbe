import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "./Loader";

export default function User() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUser();
  }, []);

  const params = useParams();

  const getUser = async () => {
    const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;
    try {
      const response = await axios.get(url);
      setUser(response.data);
    } catch (error) {
      console.error("Error getting user", error);
    } finally {
      setIsLoading(false);
    }
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
      <h1>User componenet</h1>
      <div
        key={user.id}
        className="user-card-large"
        onClick={() => {
          handleClickDetails(user.id);
        }}
      >
        <p>{user.name}</p>
        <h3>Email: {user.email}</h3>
        <h3>Website: {user.website}</h3>
        {/* <h4>City: {user.address.city}</h4> */}
        <h4>Company name: {user.company.name}</h4>
      </div>
    </>
  );
}

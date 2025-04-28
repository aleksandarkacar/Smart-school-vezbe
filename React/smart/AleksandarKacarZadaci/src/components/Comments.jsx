import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ShowComments from "./ShowComments";
import Loader from "./Loader";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const url = "https://jsonplaceholder.typicode.com/comments/";
    try {
      const response = await axios.get(url);
      setComments(response.data);
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClickDetails = (id) => {
    console.log(id);
    const linkTo = `/details/${id}`;
    navigate(linkTo);
  };

  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <h2>All Comments</h2>
      <ShowComments
        comments={comments}
        handleClickDetails={handleClickDetails}
      />
    </div>
  );
}

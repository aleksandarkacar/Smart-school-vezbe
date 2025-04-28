import axios from "axios";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function CommentDetails() {
  const [commentDetails, setCommentDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    getCommentDetails();
  }, []);

  const getCommentDetails = async () => {
    console.log("params", params);
    const url = `https://jsonplaceholder.typicode.com/comments/${params.id}`;
    try {
      const response = await axios.get(url);
      console.log(response.data);
      setCommentDetails(response.data);
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <h2>Comment details</h2>
      <div className="comment-wrapper">
        <div className="comment-card-large">
          <h4>Comment ID: {commentDetails.id}</h4>
          <h4>Post ID: {commentDetails.postId}</h4>
          <h5>Name: {commentDetails.name}</h5>
          <h5>email: {commentDetails.email}</h5>
          <p>{commentDetails.body}</p>
        </div>
      </div>
    </>
  );
}

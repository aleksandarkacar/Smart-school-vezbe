export default function ShowComments({ comments, handleClickDetails }) {
  //   console.log(comments);
  return (
    <div className="comment-wrapper">
      {comments.map((comment) => {
        return (
          <div
            className="comment-card"
            key={comment.id}
            onClick={() => handleClickDetails(comment.id)}
          >
            <h4>{comment.id}</h4>
            <p>{comment.name}</p>
          </div>
        );
      })}
    </div>
  );
}

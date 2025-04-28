export default function UserShowcase({ users }) {
  return (
    <div className="user-showcase">
      {users.map((user, i) => {
        return (
          <div className="user-showcase-card" key={i}>
            <h3>{user.first_name}</h3>
            <p>{user.email}</p>
            <img src={user.avatar} alt="User Image" />
          </div>
        );
      })}
    </div>
  );
}

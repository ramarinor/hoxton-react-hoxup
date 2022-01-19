import UserListEl from "../components/UserListEl";

function Login({ users, setCurrentUser }) {
  return (
    <div className="main-wrapper login">
      <section className="login-section">
        <h2>Choose your user!</h2>
        <ul>
          {users.map((user) => (
            <UserListEl
              key={user.id}
              user={user}
              setCurrentUser={setCurrentUser}
            />
          ))}
          <li>
            <button className="user-selection">
              <h3>+ Add a new user</h3>
            </button>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Login;

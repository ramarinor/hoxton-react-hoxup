import { useNavigate } from "react-router-dom";

function UserListEl({ user, setCurrentUser }) {
  const navigate = useNavigate();
  return (
    <li>
      <button
        className="user-selection"
        onClick={() => {
          setCurrentUser(user);
          navigate("/logged-in");
        }}
      >
        <img
          className="avatar"
          width="50"
          height="50"
          src={user.avatar}
          alt={`${user.firstName} ${user.lastName}`}
        />
        <h3>{`${user.firstName} ${user.lastName}`}</h3>
      </button>
    </li>
  );
}
export default UserListEl;

import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";

// eslint-disable-next-line react/prop-types
function Login() {
  const { user, setUser, handleSubmit } = useGlobalContext();
  const navigate = useNavigate();

  return (
    <div className="container">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id="name"
          value={user}
          placeholder="Enter your name ..."
          onChange={(e) => setUser(e.target.value)}
        />
        <button
          onClick={() => {
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/admin");
          }}
        >
          LogIn
        </button>
      </form>
    </div>
  );
}

export default Login;

import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [toggle, setToggle] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handlePassToggle = () => {
    setToggle(!toggle);
  };

  const loginData = {
    email,
    password,
  };

  const postLogin = async (url) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error("Network was not ok");
      }

      return await response.json();
    } catch (error) {}
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await postLogin("https://workasana-backened-ul1x.vercel.app/auth/login");
      setEmail("");
      setPassword("");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div
          className="card p-4 shadow"
          style={{ width: "100%", "max-width": "400px" }}
        >
          <div className="logo text-center">workasana</div>
          <h3 className="text-center mb-2">Login in to your account</h3>
          <p className="mb-4 text-center">Please enter your details</p>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 position-relative">
              <label className="form-label">Password</label>
              <div className="input-group">
                <input
                  type={toggle ? `text` : `password`}
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={handlePassToggle}
                >
                  <i className={toggle ? `bi bi-eye` : `bi bi-eye-slash`}></i>
                </button>
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-2">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;

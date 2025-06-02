const Signup = () => {
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div
          className="card p-4 shadow"
          style={{ width: "100%", "max-width": "400px" }}
        >
          <h3 className="text-center mb-4">Sign Up</h3>
          <form>
            <div className="mb-3">
              <label for="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-3">
              <label for="signupEmail" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="signupEmail"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label for="signupPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="signupPassword"
                placeholder="Enter password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;

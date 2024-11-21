import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logError, setLogError] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setLogError("All must be required");
      return;
    }

    const storeUser = localStorage.getItem("user");
    if (storeUser) {
      const user = JSON.parse(storeUser);
      if (user.email === email) {
        sessionStorage.setItem("IsLoggedIn", "true");
        alert("Login success");
        Navigate("/");
      } else {
        setLogError("Invalid email or Password");
      }
    } else {
      setLogError("User not found");
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        {logError && <p className="text-red-500">{logError}</p>}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

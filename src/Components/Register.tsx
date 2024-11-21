import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) =>{
    e.preventDefault();
    if(!userName || !password || !email){
      setError('All fields are required');
      return;
    }
    if(password.length < 6 || (!/[a-z]/.test(password)) || (!/\d/.test(password))){
      setError('Password must contain 6 letters, one number and one small character');
      return;
    }else {
      alert('Registered Successfully');
    }

    localStorage.setItem('user', JSON.stringify({userName, email}));
    sessionStorage.setItem("isLoggIn", 'true');
    //navigate to home page
    navigate('/');
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Register</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block mb-1">Username</label>
          <input type="text" id="username" value={userName} onChange={(e) => setUserName(e.target.value)} className="w-full px-3 py-2 border rounded" required/>
        </div>

        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded" required/>
        </div>

        <div>
          <label htmlFor="password" className="block mb-1">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border rounded" required/>
        </div>

        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">Register</button>
      </form>
    </div>
  );
}

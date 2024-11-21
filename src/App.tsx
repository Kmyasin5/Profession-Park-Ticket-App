import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import AddTicket from "./Components/AddTicket";
import ListTicket from "./Components/ListTicket";

function App() {
  return (
    <>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/addTicket" element={<AddTicket />} />
              <Route path="/listTicket" element={<ListTicket />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;

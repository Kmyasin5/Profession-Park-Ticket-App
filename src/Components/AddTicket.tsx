import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddTicket() {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("low");
  const [status, setStatus] = useState("open");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTicket = {
      id: Date.now(),
      title,
      priority,
      status,
    };

    const tickets = JSON.parse(localStorage.getItem("tickets") || "[]");
    tickets.push(newTicket);
    localStorage.setItem("tickets", JSON.stringify(tickets));
    alert("Ticket Added Successfully");
    navigate("/addTicket");
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add Ticket</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title">Ticket Name</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          >
            <option value="low">low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div>
          <label htmlFor="status">Status</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="open">Open</option>
            <option value="In-Progress">In Progress</option>
            <option value="closed">Closed</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Add Ticket
        </button>
      </form>
    </div>
  );
}

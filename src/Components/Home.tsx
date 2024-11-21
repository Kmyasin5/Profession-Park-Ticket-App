import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">
        Profession Park Ticket Management
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Link
          to="/addTicket"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
          <h2 className="text-2xl font-semibold mb-4">Add Ticket</h2>
          <p className="text-gray-600">Create a new ticket for your project</p>
        </Link>
        <Link
          to="/listTicket"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
          <h2 className="text-2xl font-semibold mb-4">View Tickets</h2>
          <p className="text-gray-600">See all your existing tickets</p>
        </Link>
      </div>
    </div>
  );
}

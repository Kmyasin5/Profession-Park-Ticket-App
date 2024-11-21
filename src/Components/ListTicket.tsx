import { PencilIcon, TrashIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";

interface Ticket {
  id: number;
  title: string;
  priority: string;
  status: string;
}

export default function ListTicket() {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem("tickets") || "[]");
    setTickets(storedTickets);
  }, []);

  const handleDelete = (id: number) => {
    const updatedTickets = tickets.filter((tick) => tick.id !== id);
    setTickets(updatedTickets);
    localStorage.setItem("tickets", JSON.stringify(updatedTickets));
  };

  const handleEdit = (id: number) => {
    console.log("Edit Ticket", id);
  };
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4"></h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse border-cyan-200">
          <thead>
            <tr>
              <th className="px-6 py-3 border-gray-300 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 border-gray-300 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 border-gray-300 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Priority
              </th>
              <th className="px-6 py-3 border-gray-300 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 border-gray-300 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticks) => (
              <tr key={ticks.id}>
                <td className="px-6 py-4 whitespace-nowrap">{ticks.id + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">{ticks.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {ticks.priority}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{ticks.status}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="text-blue-600 hover:text-blue-900 m-2"
                    onClick={() => handleEdit(ticks.id)}
                  >
                    <PencilIcon className="h-5 w-5" />
                  </button>
                  <button
                    className="text-blue-600 hover:text-blue-900 m-2"
                    onClick={() => handleDelete(ticks.id)}
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

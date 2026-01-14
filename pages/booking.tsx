import axios from "axios";
import { useState } from "react";

export default function BookingPage() {
  const [formData, setFormData] = useState({ name: "", propertyId: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/bookings", formData);
      setMessage("Booking successful!");
    } catch (err) {
      setMessage("Booking failed.");
      console.error("Error submitting booking:", err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Book a Property</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Property ID"
          value={formData.propertyId}
          onChange={(e) =>
            setFormData({ ...formData, propertyId: e.target.value })
          }
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit Booking
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Track from "./components/Track";
import Customers from "./components/Customers";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [tickets, setTickets] = useState([]);
  const [pendingTasks, setPendingTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  useEffect(() => {
    fetch("customers-ticket.json")
      .then((res) => res.json())
      .then((data) =>
        setTickets(data.map((ticket) => ({ ...ticket, status: "open" })))
      );
  }, []);

  const handleCardClick = (id) => {
    setTickets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: "in-progress" } : t))
    );

    const task = tickets.find((t) => t.id === id);
    if (task && !pendingTasks.some((t) => t.id === id)) {
      setPendingTasks((prev) => [...prev, { ...task, status: "in-progress" }]);
    }

    toast.info("Moved to In Progress");
  };

  const handleComplete = (id) => {
    setPendingTasks((prev) => prev.filter((t) => t.id !== id));

    setTickets((prev) => prev.filter((t) => t.id !== id));

    const task = tickets.find((t) => t.id === id);
    if (task) {
      setResolvedTasks((prev) => [...prev, { ...task, status: "resolved" }]);
    }

    toast.success("Task Resolved");
  };

  return (
    <>
      <Navbar />
      <Track
        inProgressCount={pendingTasks.length}
        resolvedCount={resolvedTasks.length}
      />
      <Customers
        tickets={tickets}
        pendingTasks={pendingTasks}
        resolvedTasks={resolvedTasks}
        onCardClick={handleCardClick}
        onComplete={handleComplete}
      />
      <ToastContainer position="top-right" autoClose={1500} />
      <Footer />
    </>
  );
}

export default App;
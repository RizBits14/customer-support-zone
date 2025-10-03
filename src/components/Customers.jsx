import React from "react";
import Customer from "./Customer";

const Customers = ({ tickets, pendingTasks, resolvedTasks, onCardClick, onComplete }) => {
    return (
        <div className="text-black px-4 mt-8">
            <h3 className="text-xl font-bold mb-4">Customers Tickets</h3>

            <div className="flex flex-col md:flex-row gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
                    {tickets.map((customer) => (
                        <Customer
                            key={customer.id}
                            customer={customer}
                            onClick={() => onCardClick(customer.id)}
                        />
                    ))}
                </div>

                <div className="w-full md:w-96 flex flex-col gap-6 mt-6 md:mt-0">
                    <div className="bg-white shadow rounded-lg p-6 flex flex-col">
                        <h3 className="font-bold text-lg mb-4">Pending Tasks</h3>
                        <div className="flex-1 overflow-y-auto max-h-64 sm:max-h-80">
                            {pendingTasks.length === 0 && (
                                <p className="text-gray-400">No pending tasks</p>
                            )}
                            {pendingTasks.map(task => (
                                <div key={task.id} className="bg-gray-100 p-3 mb-3 rounded flex flex-col sm:flex-row justify-between items-start sm:items-center">
                                    <div>
                                        <p className="font-semibold">{task.title}</p>
                                        <br />
                                        <p className="text-sm text-gray-500">{task.customer}</p>
                                        <br />
                                        <p
                                            className={
                                                task.priority === "High Priority"
                                                    ? "text-red-600 font-semibold"
                                                    : task.priority === "Medium Priority"
                                                        ? "text-yellow-500 font-semibold"
                                                        : "text-blue-600 font-semibold"
                                            }
                                        >
                                            {task.priority}
                                        </p>
                                    </div>
                                    <button
                                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                                        onClick={() => onComplete(task.id)}
                                    >
                                        Complete
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white shadow rounded-lg p-6 flex flex-col">
                        <h3 className="font-bold text-lg mb-4">Resolved Tasks</h3>
                        <div className="flex-1 overflow-y-auto max-h-64 sm:max-h-80">
                            {resolvedTasks.length === 0 && (
                                <p className="text-gray-400">No resolved tasks</p>
                            )}
                            {resolvedTasks.map(task => (
                                <div key={task.id} className="bg-gray-200 p-3 mb-3 rounded">
                                    <p className="font-semibold">{task.title}</p>
                                    <p className="text-sm text-gray-500">{task.customer}</p>
                                    <p className="text-xs text-gray-400">{new Date(task.createdAt).toLocaleDateString()}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Customers;
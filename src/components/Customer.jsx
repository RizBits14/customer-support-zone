import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';

const Customer = ({ customer, onClick }) => {
    return (
        <div
            className='bg-white p-4 sm:p-6 shadow rounded-lg cursor-pointer hover:bg-indigo-100'
            onClick={onClick}
        >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <h1 className='font-bold text-lg sm:text-2xl mb-2 sm:mb-0'>{customer.title}</h1>

                <span className={`flex items-center gap-2 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full
                    ${customer.status === 'open' ? 'bg-green-100 text-green-700' : ''}
                    ${customer.status === 'in-progress' ? 'bg-yellow-100 text-yellow-700' : ''}`}
                >
                    <span className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full
                        ${customer.status === 'open' ? 'bg-green-500' : ''}
                        ${customer.status === 'in-progress' ? 'bg-yellow-500' : ''}`}
                    ></span>
                    {customer.status === 'open' ? 'Open' : 'In Progress'}
                </span>
            </div>

            <p className="mt-2 text-gray-500 line-clamp-2 text-sm sm:text-base">
                {customer.description}
            </p>

            <div className='flex flex-col sm:flex-row justify-between mt-4 gap-2 sm:gap-0'>
                <p className={
                    customer.priority === "High Priority"
                        ? "text-red-600 font-semibold"
                        : customer.priority === "Medium Priority"
                            ? "text-yellow-500 font-semibold"
                            : "text-blue-600 font-semibold"
                }>
                    {customer.priority}
                </p>

                <div className='flex flex-wrap sm:flex-row gap-2 sm:gap-4 items-center'>
                    <p className='text-sm text-gray-500'>{customer.customer}</p>
                    <div className='flex items-center gap-1 text-gray-500 text-sm'>
                        <AiOutlineCalendar className="w-4 h-4" />
                        <span>{new Date(customer.createdAt).toLocaleDateString()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customer;
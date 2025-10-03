import React from 'react';
import trackImg from '../assets/vector1.png'

const Track = ({ inProgressCount, resolvedCount }) => {
    return (
        <div className="text-black flex flex-col lg:flex-row gap-6 justify-center items-center mt-10 text-center px-4">
            <div className="relative bg-gradient-to-br from-[#632EE3] to-[#9F62F2] w-full sm:w-[400px] lg:w-[800px] h-52 sm:h-64 rounded-lg flex flex-col justify-center items-center hover:from-[#9F62F2] hover:to-[#632EE3]">
                <img src={trackImg} alt="track" className="absolute left-0 top-1/2 -translate-y-1/2" />
                <div className="flex flex-col items-center">
                    <h1 className="text-white text-xl sm:text-2xl font-bold">In-Progress</h1>
                    <h1 className="text-white text-3xl font-extrabold">{inProgressCount}</h1>
                </div>
                <img src={trackImg} alt="" className="absolute right-0 top-1/2 -translate-y-1/2 rotate-180" />
            </div>

            <div className="relative bg-gradient-to-br from-[#54CF68] to-[#00827A] w-full sm:w-[400px] lg:w-[800px] h-52 sm:h-64 rounded-lg flex flex-col justify-center items-center hover:from-[#00827A] hover:to-[#54CF68]">
                <img src={trackImg} alt="track" className="absolute left-0 top-1/2 -translate-y-1/2" />
                <div className="flex flex-col items-center">
                    <h1 className="text-white text-xl sm:text-2xl font-bold">Resolved</h1>
                    <h1 className="text-white text-3xl font-extrabold">{resolvedCount}</h1>
                </div>
                <img src={trackImg} alt="" className="absolute right-0 top-1/2 -translate-y-1/2 rotate-180" />
            </div>
        </div>
    );
};

export default Track;
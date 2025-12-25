import React from 'react';

const DummyTeamChart = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative">
            <h3 className="absolute top-0 left-0 text-sm font-semibold text-gray-700">Team</h3>

            <div className="relative w-32 h-32 mt-4">
                <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                    {/* Ring Background */}
                    <path
                        className="text-gray-200"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                    />

                    {/* Segment 1: Red */}
                    <path
                        className="text-red-400"
                        strokeDasharray="40, 100"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                    />

                    {/* Segment 2: Purple (Offset) */}
                    <path
                        className="text-indigo-500"
                        strokeDasharray="25, 100"
                        strokeDashoffset="-40"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                    />

                    {/* Segment 3: Green (Offset) */}
                    <path
                        className="text-green-400"
                        strokeDasharray="35, 100"
                        strokeDashoffset="-65"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                    />
                </svg>

                {/* Center Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-xs">
                    <span className="font-bold text-lg">82</span>
                    <span className="text-gray-400 text-[10px]">members</span>
                </div>
            </div>

            {/* Legend */}
            <div className="flex w-full justify-between px-2 mt-4">
                <div className="flex items-center gap-1 text-[10px] text-gray-500">
                    <span className="w-2 h-2 rounded-full bg-red-400"></span> Des
                </div>
                <div className="flex items-center gap-1 text-[10px] text-gray-500">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span> Dev
                </div>
                <div className="flex items-center gap-1 text-[10px] text-gray-500">
                    <span className="w-2 h-2 rounded-full bg-green-400"></span> Man
                </div>
            </div>
        </div>
    );
};

export default DummyTeamChart;

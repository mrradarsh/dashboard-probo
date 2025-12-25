import React from 'react';

const DummyWorkTimeChart = () => {
    return (
        <div className="w-full h-full flex flex-col justify-between">
            <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg">Work Time</h3>
                <button className="text-gray-400 text-xs">This week</button>
            </div>

            {/* Chart Area */}
            <div className="relative h-32 w-full">
                {/* Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between text-xs text-gray-300">
                    <div className="border-b border-gray-100 w-full h-0"></div>
                    <div className="border-b border-gray-100 w-full h-0"></div>
                    <div className="border-b border-gray-100 w-full h-0"></div>
                    <div className="border-b border-gray-100 w-full h-0"></div>
                </div>

                {/* The Line Graph (SVG) */}
                <svg className="absolute inset-0 w-full h-full text-indigo-500 overflow-visible" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0,80 C20,70 40,90 60,60 C80,30 100,50 120,40 C140,30 160,60 180,50 C200,40 220,20 240,10 C260,5 280,30 300,40 L300,100 L0,100 Z"
                        fill="url(#gradient)"
                        className="w-full"
                    />
                    <path
                        d="M0,80 C20,70 40,90 60,60 C80,30 100,50 120,40 C140,30 160,60 180,50 C200,40 220,20 240,10 C260,5 280,30 300,40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                    />
                    {/* Active Point */}
                    <circle cx="240" cy="10" r="4" fill="white" stroke="currentColor" strokeWidth="2" />
                </svg>
            </div>

            {/* X Axis Labels */}
            <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
            </div>
        </div>
    );
};

export default DummyWorkTimeChart;

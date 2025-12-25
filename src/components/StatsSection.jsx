import React from 'react';
import { ArrowUp, Hourglass, Globe, Users } from 'lucide-react';

const StatsSection = () => {
    return (
        <div className="flex flex-col md:flex-row gap-6 h-auto lg:h-[260px]">
            {/* Large Stats Card (Hours) */}
            <div className="flex-1 bg-gray-50 rounded-3xl p-6 relative">
                <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
                        <Hourglass size={20} />
                    </div>
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold">46,5</span>
                        <span className="bg-green-400 text-white text-xs px-2 py-1 rounded-full">+0.5%</span>
                    </div>
                </div>
                <p className="text-gray-400 text-xs mb-6">avg hours / weeks</p>

                {/* Dot chart visualization simulation */}
                <div className="flex items-end justify-between h-24 gap-1 overflow-hidden">
                    {[3, 4, 3, 5, 6, 2, 4, 3, 5, 4, 6, 3, 4, 5, 4, 3].map((val, i) => (
                        <div key={i} className="flex flex-col gap-1">
                            {[...Array(6)].map((_, j) => (
                                <div
                                    key={j}
                                    className={`w-1.5 md:w-2 h-1.5 md:h-2 rounded-full ${6 - j <= val ? 'bg-teal-700' : 'bg-gray-200'}`}
                                ></div>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="flex gap-4 mt-6 text-xs font-semibold text-gray-600">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-gray-400 rounded-sm"></span> 2 Hours
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-teal-700 rounded-sm"></span> 10 Hours
                    </div>
                </div>
            </div>

            {/* Right Column Stats */}
            <div className="w-full md:w-1/3 flex flex-col gap-4">

                {/* Onsite Card */}
                <div className="bg-[#527CA6] text-white rounded-3xl p-5 flex-1 flex flex-col justify-between min-h-[120px]">
                    <div className="flex justify-between items-start">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <Users size={16} />
                        </div>
                        <div className="flex items-center gap-1 bg-white/20 rounded-full px-2 py-0.5 text-xs">
                            <span>+2.6%</span>
                            <ArrowUp size={10} />
                        </div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold">80%</div>
                        <div className="text-white/80 text-sm">Onsite team</div>
                    </div>
                </div>

                {/* Remote Card */}
                <div className="bg-white border border-gray-100 rounded-3xl p-5 flex-1 flex flex-col justify-between shadow-sm min-h-[120px]">
                    <div className="flex justify-between items-start">
                        <div className="w-8 h-8 bg-[#E0F2F1] text-teal-700 rounded-full flex items-center justify-center">
                            <Globe size={16} />
                        </div>
                        <div className="flex items-center gap-1 bg-green-100 text-green-700 rounded-full px-2 py-0.5 text-xs">
                            <span>+2.6%</span>
                            <ArrowUp size={10} />
                        </div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-gray-900">20%</div>
                        <div className="text-gray-500 text-sm">Remote team</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default StatsSection;

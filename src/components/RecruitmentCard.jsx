import React from 'react';
import { ChevronRight, Video } from 'lucide-react';

const RecruitmentCard = () => {
    return (
        <div className="h-full flex flex-col">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <p className="text-gray-400 text-xs mb-1">Hiring statistics</p>
                    <h3 className="text-lg font-semibold">Talent recruitment</h3>
                </div>
                <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100">
                    <ChevronRight size={16} className="text-gray-400" />
                </button>
            </div>

            <div className="flex items-center gap-4 mb-6">
                <div className="flex -space-x-3">
                    <img className="w-12 h-12 rounded-2xl object-cover border-2 border-white" src="https://i.pravatar.cc/150?img=32" alt="" />
                    <img className="w-12 h-12 rounded-2xl object-cover border-2 border-white" src="https://i.pravatar.cc/150?img=11" alt="" />
                </div>
                <button className="h-12 px-4 bg-[#527CA6] text-white rounded-2xl flex flex-col items-center justify-center text-xs ml-auto">
                    <Video size={16} className="mb-0.5" />
                    Join call
                </button>
            </div>

            <div className="flex justify-between items-end text-xs mb-2">
                <span className="font-semibold text-gray-700">120 Talent</span>
                <span className="font-semibold text-gray-700">80 Talent</span>
            </div>

            {/* Simple Bar Chart Visualization using CSS */}
            <div className="flex items-end justify-between gap-1 h-16">
                {[40, 60, 45, 70, 50, 60, 80, 55, 45, 60, 75, 50, 65, 40].map((h, i) => (
                    <div
                        key={i}
                        className={`w-full rounded-full ${i % 2 === 0 ? 'bg-green-200' : 'bg-green-100'}`}
                        style={{ height: `${h}%` }}
                    ></div>
                ))}
            </div>

            <div className="flex gap-4 mt-2 justify-center text-[10px] text-gray-400">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-200"></span> Matched</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-100"></span> Not match</span>
            </div>
        </div>
    );
};

export default RecruitmentCard;

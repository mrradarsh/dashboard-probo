import React, { useState } from 'react';
import { ChevronRight, Video, Users, TrendingUp, Calendar } from 'lucide-react';
import DetailModal from './DetailModal';

const RecruitmentCard = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <p className="text-gray-400 text-xs mb-1">Hiring statistics</p>
                        <h3 className="text-lg font-semibold">Talent recruitment</h3>
                    </div>
                    <button
                        onClick={() => setShowModal(true)}
                        className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                        <ChevronRight size={16} className="text-gray-400" />
                    </button>
                </div>

                <div className="flex items-center gap-4 mb-6">
                    <div className="flex -space-x-3">
                        <img className="w-12 h-12 rounded-2xl object-cover border-2 border-white" src="https://i.pravatar.cc/150?img=32" alt="" />
                        <img className="w-12 h-12 rounded-2xl object-cover border-2 border-white" src="https://i.pravatar.cc/150?img=11" alt="" />
                    </div>
                    <button className="h-12 px-4 bg-[#527CA6] text-white rounded-2xl flex flex-col items-center justify-center text-xs ml-auto hover:bg-[#456a8f] transition-colors">
                        <Video size={16} className="mb-0.5" />
                        Join call
                    </button>
                </div>

                <div className="flex justify-between items-end text-xs mb-2">
                    <span className="font-semibold text-gray-700">120 Talent</span>
                    <span className="font-semibold text-gray-700">80 Talent</span>
                </div>

                {/* Simple Bar Chart Visualization using CSS */}
                <div className="flex items-end justify-between gap-1 h-16 cursor-pointer" onClick={() => setShowModal(true)}>
                    {[40, 60, 45, 70, 50, 60, 80, 55, 45, 60, 75, 50, 65, 40].map((h, i) => (
                        <div
                            key={i}
                            className={`w-full rounded-full ${i % 2 === 0 ? 'bg-green-200' : 'bg-green-100'} hover:opacity-80 transition-opacity`}
                            style={{ height: `${h}%` }}
                        ></div>
                    ))}
                </div>

                <div className="flex gap-4 mt-2 justify-center text-[10px] text-gray-400">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-200"></span> Matched</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-100"></span> Not match</span>
                </div>
            </div>

            {/* Recruitment Details Modal */}
            <DetailModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                title="Talent Recruitment Statistics"
                icon={Users}
            >
                <div className="space-y-6">
                    {/* Summary Cards */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-green-50 rounded-2xl p-4">
                            <p className="text-sm text-gray-600 mb-1">Matched Candidates</p>
                            <p className="text-3xl font-bold text-green-700">120</p>
                            <p className="text-xs text-green-600 mt-1">+15% this month</p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-4">
                            <p className="text-sm text-gray-600 mb-1">Not Matched</p>
                            <p className="text-3xl font-bold text-gray-700">80</p>
                            <p className="text-xs text-gray-500 mt-1">-8% this month</p>
                        </div>
                    </div>

                    {/* Recruitment Pipeline */}
                    <div>
                        <h3 className="font-semibold mb-3">Recruitment Pipeline</h3>
                        <div className="space-y-3">
                            {[
                                { stage: 'Application Received', count: 350, color: 'bg-blue-500' },
                                { stage: 'Initial Screening', count: 200, color: 'bg-purple-500' },
                                { stage: 'Technical Interview', count: 120, color: 'bg-green-500' },
                                { stage: 'Final Interview', count: 50, color: 'bg-orange-500' },
                                { stage: 'Offer Extended', count: 25, color: 'bg-teal-500' },
                            ].map((item, i) => (
                                <div key={i}>
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-sm font-medium">{item.stage}</span>
                                        <span className="text-sm font-semibold">{item.count}</span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${item.color} rounded-full`}
                                            style={{ width: `${(item.count / 350) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Candidates */}
                    <div>
                        <h3 className="font-semibold mb-3">Recent Matched Candidates</h3>
                        <div className="space-y-3">
                            {[
                                { name: 'Sarah Johnson', role: 'Senior Frontend Developer', experience: '5 years', match: '95%' },
                                { name: 'Michael Chen', role: 'Backend Engineer', experience: '4 years', match: '92%' },
                                { name: 'Emily Davis', role: 'UX/UI Designer', experience: '3 years', match: '88%' },
                                { name: 'Alex Kumar', role: 'Data Scientist', experience: '6 years', match: '90%' },
                            ].map((candidate, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                                    <img
                                        src={`https://i.pravatar.cc/150?img=${i + 30}`}
                                        alt={candidate.name}
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div className="flex-1">
                                        <p className="font-semibold text-sm">{candidate.name}</p>
                                        <p className="text-xs text-gray-500">{candidate.role}</p>
                                        <p className="text-xs text-gray-400">{candidate.experience} experience</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-lg font-bold text-green-600">{candidate.match}</span>
                                        <p className="text-xs text-gray-500">Match</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Upcoming Interviews */}
                    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <Calendar size={20} className="text-blue-600" />
                            <p className="font-semibold text-blue-800">Upcoming Interviews</p>
                        </div>
                        <p className="text-sm text-blue-700 mb-2">You have 8 interviews scheduled this week</p>
                        <button className="text-blue-600 text-sm font-semibold hover:underline">View Calendar →</button>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                        <button className="flex-1 bg-[#527CA6] text-white py-3 rounded-xl font-semibold hover:bg-[#456a8f] transition-colors flex items-center justify-center gap-2">
                            <Video size={18} />
                            Join Interview Call
                        </button>
                        <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
                            View All Candidates
                        </button>
                    </div>
                </div>
            </DetailModal>
        </>
    );
};

export default RecruitmentCard;

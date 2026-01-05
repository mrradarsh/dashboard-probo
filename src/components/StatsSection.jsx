import React, { useState } from 'react';
import { ArrowUp, Hourglass, Globe, Users } from 'lucide-react';
import DetailModal from './DetailModal';

const StatsSection = () => {
    const [activeModal, setActiveModal] = useState(null);

    return (
        <>
            <div className="flex flex-col md:flex-row gap-6 h-auto lg:h-[260px]">
                {/* Large Stats Card (Hours) - Clickable */}
                <div
                    onClick={() => setActiveModal('hours')}
                    className="flex-1 bg-gray-50 rounded-3xl p-6 relative cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02]"
                >
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

                    {/* Onsite Card - Clickable */}
                    <div
                        onClick={() => setActiveModal('onsite')}
                        className="bg-[#527CA6] text-white rounded-3xl p-5 flex-1 flex flex-col justify-between min-h-[120px] cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02]"
                    >
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

                    {/* Remote Card - Clickable */}
                    <div
                        onClick={() => setActiveModal('remote')}
                        className="bg-white border border-gray-100 rounded-3xl p-5 flex-1 flex flex-col justify-between shadow-sm min-h-[120px] cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02]"
                    >
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

            {/* Hours Modal */}
            <DetailModal
                isOpen={activeModal === 'hours'}
                onClose={() => setActiveModal(null)}
                title="Work Hours Analytics"
                icon={Hourglass}
            >
                <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 rounded-2xl p-4">
                            <p className="text-sm text-gray-500 mb-1">This Week</p>
                            <p className="text-2xl font-bold">46.5 hrs</p>
                            <p className="text-xs text-green-600 mt-1">+0.5% from last week</p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-4">
                            <p className="text-sm text-gray-500 mb-1">Last Week</p>
                            <p className="text-2xl font-bold">46.2 hrs</p>
                            <p className="text-xs text-gray-500 mt-1">Previous period</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-3">Daily Breakdown</h3>
                        <div className="space-y-2">
                            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, i) => (
                                <div key={day} className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">{day}</span>
                                    <div className="flex items-center gap-3">
                                        <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-teal-600 rounded-full"
                                                style={{ width: `${[85, 92, 78, 95, 88][i]}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-sm font-semibold w-12 text-right">{[8.5, 9.2, 7.8, 9.5, 8.8][i]} hrs</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-green-50 border border-green-100 rounded-2xl p-4">
                        <p className="text-sm font-semibold text-green-800 mb-1">Productivity Insight</p>
                        <p className="text-xs text-green-700">You're averaging 9.3 hours per day this week, which is 8% above your target. Great work!</p>
                    </div>
                </div>
            </DetailModal>

            {/* Onsite Team Modal */}
            <DetailModal
                isOpen={activeModal === 'onsite'}
                onClose={() => setActiveModal(null)}
                title="Onsite Team Details"
                icon={Users}
            >
                <div className="space-y-6">
                    <div className="bg-[#527CA6] text-white rounded-2xl p-6">
                        <p className="text-sm opacity-80 mb-2">Total Onsite Team Members</p>
                        <p className="text-4xl font-bold mb-2">80%</p>
                        <p className="text-sm opacity-90">24 out of 30 employees</p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-3">Onsite Team Members</h3>
                        <div className="space-y-3">
                            {[
                                { name: 'Adarsh Dubey', role: 'CEO, Founder', department: 'Management' },
                                { name: 'Sarah Smith', role: 'Product Manager', department: 'Product' },
                                { name: 'Mike Johnson', role: 'Lead Developer', department: 'Engineering' },
                                { name: 'Emily Brown', role: 'UX Designer', department: 'Design' },
                                { name: 'Alex Chen', role: 'Marketing Lead', department: 'Marketing' },
                            ].map((member, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                                    <img
                                        src={`https://i.pravatar.cc/150?img=${i + 10}`}
                                        alt={member.name}
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div className="flex-1">
                                        <p className="font-semibold text-sm">{member.name}</p>
                                        <p className="text-xs text-gray-500">{member.role}</p>
                                    </div>
                                    <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                                        {member.department}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
                        <p className="text-sm font-semibold text-blue-800 mb-1">Growth Trend</p>
                        <p className="text-xs text-blue-700">Onsite team has grown by 2.6% this month with 2 new hires in engineering.</p>
                    </div>
                </div>
            </DetailModal>

            {/* Remote Team Modal */}
            <DetailModal
                isOpen={activeModal === 'remote'}
                onClose={() => setActiveModal(null)}
                title="Remote Team Details"
                icon={Globe}
            >
                <div className="space-y-6">
                    <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-2xl p-6">
                        <p className="text-sm opacity-80 mb-2">Total Remote Team Members</p>
                        <p className="text-4xl font-bold mb-2">20%</p>
                        <p className="text-sm opacity-90">6 out of 30 employees</p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-3">Remote Team Members</h3>
                        <div className="space-y-3">
                            {[
                                { name: 'Ramanand Rajak', role: 'Backend Developer', location: 'Mumbai, India', timezone: 'IST' },
                                { name: 'John Davis', role: 'Frontend Developer', location: 'London, UK', timezone: 'GMT' },
                                { name: 'Maria Garcia', role: 'Content Writer', location: 'Barcelona, Spain', timezone: 'CET' },
                                { name: 'David Kim', role: 'Data Analyst', location: 'Seoul, Korea', timezone: 'KST' },
                            ].map((member, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                                    <img
                                        src={`https://i.pravatar.cc/150?img=${i + 20}`}
                                        alt={member.name}
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div className="flex-1">
                                        <p className="font-semibold text-sm">{member.name}</p>
                                        <p className="text-xs text-gray-500">{member.role}</p>
                                        <p className="text-xs text-gray-400">{member.location}</p>
                                    </div>
                                    <span className="text-xs bg-teal-100 text-teal-700 px-3 py-1 rounded-full">
                                        {member.timezone}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-green-50 border border-green-100 rounded-2xl p-4">
                        <p className="text-sm font-semibold text-green-800 mb-1">Global Coverage</p>
                        <p className="text-xs text-green-700">Remote team provides 24/7 coverage across 4 different time zones, ensuring continuous development.</p>
                    </div>
                </div>
            </DetailModal>
        </>
    );
};

export default StatsSection;

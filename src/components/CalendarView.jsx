import React from 'react';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';

const events = [
    { day: 5, title: 'Team Meeting', time: '10:00 AM', type: 'meeting' },
    { day: 12, title: 'Project Review', time: '2:00 PM', type: 'work' },
    { day: 18, title: 'Design Sprint', time: '11:00 AM', type: 'design' },
    { day: 24, title: 'Client Call', time: '4:00 PM', type: 'meeting' },
];

const CalendarView = () => {
    const days = Array.from({ length: 30 }, (_, i) => i + 1);
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const getEvent = (day) => events.find(e => e.day === day);

    return (
        <div className="flex flex-col lg:flex-row gap-6">
            {/* Main Calendar Grid */}
            <div className="flex-1 bg-gray-50 rounded-3xl p-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold">November 2024</h2>
                    <div className="flex gap-2">
                        <button className="p-2 hover:bg-gray-200 rounded-full"><ChevronLeft size={20} /></button>
                        <button className="p-2 hover:bg-gray-200 rounded-full"><ChevronRight size={20} /></button>
                    </div>
                </div>

                <div className="grid grid-cols-7 gap-2 mb-2 text-center">
                    {weekDays.map(d => <div key={d} className="text-xs font-medium text-gray-500 py-2">{d}</div>)}
                </div>
                <div className="grid grid-cols-7 gap-2">
                    {/* Padding for start of month (assuming Nov starts on Fri for dummy) */}
                    {[...Array(5)].map((_, i) => <div key={`pad-${i}`} />)}

                    {days.map(day => {
                        const event = getEvent(day);
                        return (
                            <div key={day} className={`aspect-square rounded-2xl flex flex-col items-center justify-center relative cursor-pointer hover:bg-white hover:shadow-sm transition-all ${event ? 'bg-white shadow-sm' : ''}`}>
                                <span className={`text-sm ${event ? 'font-bold' : 'text-gray-600'}`}>{day}</span>
                                {event && (
                                    <div className={`mt-1 w-1.5 h-1.5 rounded-full ${event.type === 'meeting' ? 'bg-indigo-500' :
                                            event.type === 'design' ? 'bg-pink-500' : 'bg-green-500'
                                        }`}></div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Upcoming Events Sidebar */}
            <div className="w-full lg:w-80 flex flex-col gap-4">
                <div className="bg-[#B4EFB6] rounded-3xl p-6 text-green-900">
                    <div className="text-sm font-medium opacity-80 mb-1">Today</div>
                    <div className="text-3xl font-bold mb-4">18 Nov</div>
                    <div className="bg-white/40 rounded-xl p-4 flex items-center gap-3">
                        <Clock size={20} />
                        <div>
                            <div className="font-semibold text-sm">Design Sprint</div>
                            <div className="text-xs opacity-70">11:00 AM - 1:00 PM</div>
                        </div>
                    </div>
                </div>

                <div className="bg-white border border-gray-100 rounded-3xl p-6 flex-1">
                    <h3 className="font-semibold mb-4">Upcoming</h3>
                    <div className="space-y-4">
                        {events.filter(e => e.day > 18).map((e, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="flex-col items-center flex gap-1 min-w-[3rem]">
                                    <span className="text-xs text-gray-400">Nov</span>
                                    <span className="font-bold text-lg">{e.day}</span>
                                </div>
                                <div className="w-1 h-8 bg-gray-100 rounded-full"></div>
                                <div>
                                    <div className="font-medium text-sm">{e.title}</div>
                                    <div className="text-xs text-gray-500">{e.time}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalendarView;

import React, { useState, useRef, useEffect } from 'react';
import { Search, Mail, Bell, X, Check } from 'lucide-react';
import Button from './Button';
import UserProfileModal from './UserProfileModal';

const dummyMessages = [
    { id: 1, sender: 'Sarah Smith', preview: 'Can we reschedule the meeting?', time: '2m ago', unread: true },
    { id: 2, sender: 'Ramanand', preview: 'Project files have been uploaded.', time: '1h ago', unread: false },
    { id: 3, sender: 'Mike Johnson', preview: 'Great work on the dashboard!', time: '3h ago', unread: false },
];

const dummyNotifications = [
    { id: 1, title: 'New Task Assigned', desc: 'You have been assigned to "Mobile App Launch"', time: '10m ago', unread: true },
    { id: 2, title: 'Meeting Reminder', desc: 'Team Standup in 15 minutes', time: '15m ago', unread: true },
    { id: 3, title: 'System Update', desc: 'Maintenance scheduled for tonight', time: '5h ago', unread: false },
];

const Header = ({ activeTab, onTabChange }) => {
    const [showMessages, setShowMessages] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    // Close dropdowns when clicking outside
    const headerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (headerRef.current && !headerRef.current.contains(event.target)) {
                setShowMessages(false);
                setShowNotifications(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleMessages = () => {
        setShowMessages(!showMessages);
        setShowNotifications(false);
    };

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
        setShowMessages(false);
    };

    return (
        <>
            <header ref={headerRef} className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 py-4 lg:py-6 bg-white gap-4 lg:gap-0 relative z-50">
                <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-8 w-full lg:w-auto">
                    {/* Logo */}
                    <div className="w-10 h-10 bg-[#B4EFB6] rounded-xl flex items-center justify-center text-green-800 shrink-0 font-bold text-xl">
                        V
                    </div>

                    {/* Navigation Pills */}
                    <nav className="flex items-center bg-[#F4F5F7] p-1 rounded-full overflow-x-auto max-w-full no-scrollbar">
                        {['Dashboard', 'Statistics', 'Portfolio', 'Calendar', 'Projects', 'Team', 'Documents'].map((item) => (
                            <Button
                                key={item}
                                variant={activeTab === item ? 'active' : 'ghost'}
                                onClick={() => onTabChange(item)}
                                className="rounded-full !py-2 !px-4 lg:!px-6 border-none whitespace-nowrap"
                            >
                                {item}
                            </Button>
                        ))}
                    </nav>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-6 w-full lg:w-auto justify-end relative">
                    <div className="flex items-center gap-2 text-gray-400 bg-gray-50 px-4 py-2 rounded-full flex-1 lg:flex-none">
                        <Search size={18} />
                        <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-sm w-full lg:w-32" />
                    </div>

                    {/* Messages */}
                    <div className="relative">
                        <button
                            onClick={toggleMessages}
                            className={`p-2 hover:text-gray-600 transition-colors ${showMessages ? 'text-green-600 bg-green-50 rounded-full' : 'text-gray-400'}`}
                        >
                            <Mail size={20} />
                            {dummyMessages.some(m => m.unread) && (
                                <span className="absolute top-2 right-2 w-2 h-2 bg-red-400 rounded-full border border-white"></span>
                            )}
                        </button>

                        {showMessages && (
                            <div className="absolute right-0 top-12 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 animate-in fade-in slide-in-from-top-2 duration-200">
                                <div className="flex items-center justify-between mb-3 border-b border-gray-100 pb-2">
                                    <h3 className="font-semibold text-gray-900">Messages</h3>
                                    <button className="text-xs text-blue-500 hover:text-blue-700">Mark all read</button>
                                </div>
                                <div className="flex flex-col gap-2">
                                    {dummyMessages.map(msg => (
                                        <div key={msg.id} className="p-2 hover:bg-gray-50 rounded-lg cursor-pointer flex gap-3 items-start">
                                            <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0">
                                                <img src={`https://i.pravatar.cc/150?img=${msg.id + 20}`} className="w-full h-full rounded-full" alt="User" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex justify-between items-baseline">
                                                    <p className={`text-sm ${msg.unread ? 'font-bold' : 'font-medium'} text-gray-900`}>{msg.sender}</p>
                                                    <span className="text-[10px] text-gray-400">{msg.time}</span>
                                                </div>
                                                <p className="text-xs text-gray-500 truncate">{msg.preview}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button className="w-full mt-3 text-center text-xs text-gray-500 hover:text-gray-700 py-1">View all messages</button>
                            </div>
                        )}
                    </div>

                    {/* Notifications */}
                    <div className="relative">
                        <button
                            onClick={toggleNotifications}
                            className={`p-2 hover:text-gray-600 transition-colors ${showNotifications ? 'text-green-600 bg-green-50 rounded-full' : 'text-gray-400 relative'}`}
                        >
                            <Bell size={20} />
                            {dummyNotifications.some(n => n.unread) && (
                                <span className="absolute top-2 right-2 w-2 h-2 bg-red-400 rounded-full border border-white"></span>
                            )}
                        </button>

                        {showNotifications && (
                            <div className="absolute right-0 top-12 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 animate-in fade-in slide-in-from-top-2 duration-200">
                                <div className="flex items-center justify-between mb-3 border-b border-gray-100 pb-2">
                                    <h3 className="font-semibold text-gray-900">Notifications</h3>
                                    <div className="flex gap-2">
                                        <button className="text-xs text-gray-400 hover:text-gray-600"><Check size={14} /></button>
                                        <button className="text-xs text-gray-400 hover:text-gray-600"><X size={14} /></button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    {dummyNotifications.map(notif => (
                                        <div key={notif.id} className="p-2 hover:bg-gray-50 rounded-lg cursor-pointer flex gap-3 items-start">
                                            <div className={`w-2 h-2 mt-1.5 rounded-full flex-shrink-0 ${notif.unread ? 'bg-blue-500' : 'bg-transparent'}`}></div>
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-gray-900">{notif.title}</p>
                                                <p className="text-xs text-gray-500 leading-tight mb-1">{notif.desc}</p>
                                                <span className="text-[10px] text-gray-400 block">{notif.time}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button className="w-full mt-3 text-center text-xs text-gray-500 hover:text-gray-700 py-1">View all notifications</button>
                            </div>
                        )}
                    </div>

                    <div
                        onClick={() => setShowProfile(true)}
                        className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 cursor-pointer hover:ring-2 hover:ring-green-200 transition-all"
                    >
                        <img src="https://i.pravatar.cc/150?img=12" alt="User" className="w-full h-full object-cover" />
                    </div>
                </div>
            </header>

            <UserProfileModal isOpen={showProfile} onClose={() => setShowProfile(false)} />
        </>
    );
};

export default Header;

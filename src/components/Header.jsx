import React from 'react';
import { Search, Mail, Bell, LayoutGrid, ChevronLeft, ChevronRight, Download, Plus } from 'lucide-react';


const Header = () => {
    return (
        <header className="flex items-center justify-between px-8 py-6 bg-white">
            <div className="flex items-center gap-8">
                {/* Logo */}
                <div className="w-10 h-10 bg-[#B4EFB6] rounded-xl flex items-center justify-center text-green-800">
                    <LayoutGrid size={24} />
                </div>

                {/* Navigation Pills */}
                <nav className="flex items-center bg-[#F4F5F7] p-1 rounded-full">
                    {['Dashboard', 'Calendar', 'Projects', 'Team', 'Documents'].map((item, index) => (
                        <button
                            key={item}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${index === 0
                                ? 'bg-[#B4EFB6] text-green-900 shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-gray-400 bg-gray-50 px-4 py-2 rounded-full">
                    <Search size={18} />
                    <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-sm w-32" />
                </div>
                <button className="p-2 text-gray-400 hover:text-gray-600">
                    <Mail size={20} />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 relative">
                    <Bell size={20} />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-400 rounded-full border border-white"></span>
                </button>
                <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
                    <img src="https://i.pravatar.cc/150?img=12" alt="User" className="w-full h-full object-cover" />
                </div>
            </div>
        </header>
    );
};

export default Header;

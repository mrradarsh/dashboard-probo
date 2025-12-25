import React from 'react';
import { Search, Mail, Bell, LayoutGrid } from 'lucide-react';
import Button from './Button';

const Header = ({ activeTab, onTabChange }) => {
    return (
        <header className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 py-4 lg:py-6 bg-white gap-4 lg:gap-0">
            <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-8 w-full lg:w-auto">
                {/* Logo */}
                <div className="w-10 h-10 bg-[#B4EFB6] rounded-xl flex items-center justify-center text-green-800 shrink-0">
                    <LayoutGrid size={24} />
                </div>

                {/* Navigation Pills */}
                <nav className="flex items-center bg-[#F4F5F7] p-1 rounded-full overflow-x-auto max-w-full no-scrollbar">
                    {['Dashboard', 'Calendar', 'Projects', 'Team', 'Documents'].map((item) => (
                        <Button
                            key={item}
                            variant={activeTab === item ? 'active' : 'ghost'}
                            onClick={() => onTabChange(item)}
                            className="rounded-full !py-2 !px-4 lg:!px-6 border-none"
                        >
                            {item}
                        </Button>
                    ))}
                </nav>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-6 w-full lg:w-auto justify-end">
                <div className="flex items-center gap-2 text-gray-400 bg-gray-50 px-4 py-2 rounded-full flex-1 lg:flex-none">
                    <Search size={18} />
                    <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-sm w-full lg:w-32" />
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

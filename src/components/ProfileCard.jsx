import React from 'react';
import { Phone, Mail, Sparkles } from 'lucide-react';


const ProfileCard = () => {
    return (
        <div className="w-full h-full relative">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-3xl"
                />
                {/* Gradient overlay for text readability if needed, though image suggests clean look */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl"></div>
            </div>

            <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-xs font-medium mb-4">
                    <span>4+ years experience</span>
                    <Sparkles size={12} className="text-white" />
                </div>

                <div className="flex items-end justify-between">
                    <div>
                        <h3 className="text-xl font-semibold">Chris Jonathan</h3>
                        <p className="text-gray-200 text-sm">General manager</p>
                    </div>

                    <div className="flex gap-2">
                        <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                            <Phone size={18} />
                        </button>
                        <button className="w-10 h-10 bg-black/80 text-white rounded-full flex items-center justify-center hover:bg-black transition-colors">
                            <Mail size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;

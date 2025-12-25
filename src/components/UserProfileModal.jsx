import React from 'react';
import { X, MapPin, Mail, Phone, Link as LinkIcon, Github, Linkedin, Twitter, Award, Briefcase } from 'lucide-react';
import Button from './Button';

const UserProfileModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white rounded-[2rem] w-full max-w-3xl shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-300 flex flex-col md:flex-row">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-black/5 rounded-full z-10 transition-colors"
                >
                    <X size={24} className="text-gray-600" />
                </button>

                {/* Left Side: Visual & Basic Info */}
                <div className="w-full md:w-2/5 bg-gradient-to-br from-[#B4EFB6] to-[#8BC34A] p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
                    {/* Decorative circles */}
                    <div className="absolute top-[-50px] left-[-50px] w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
                    <div className="absolute bottom-[-20px] right-[-20px] w-40 h-40 bg-white/20 rounded-full blur-xl"></div>

                    <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden mb-6 relative z-10">
                        <img src="https://i.pravatar.cc/150?img=12" alt="Profile" className="w-full h-full object-cover" />
                    </div>

                    <h2 className="text-2xl font-bold text-green-900 mb-1">Adarsh</h2>
                    <p className="text-green-800 font-medium mb-6">Senior Product Designer</p>

                    <div className="flex gap-2 mb-8">
                        <a href="#" className="p-2 bg-white/30 hover:bg-white/50 rounded-full text-green-900 transition-colors"><Github size={18} /></a>
                        <a href="#" className="p-2 bg-white/30 hover:bg-white/50 rounded-full text-green-900 transition-colors"><Linkedin size={18} /></a>
                        <a href="#" className="p-2 bg-white/30 hover:bg-white/50 rounded-full text-green-900 transition-colors"><Twitter size={18} /></a>
                    </div>

                    <div className="w-full bg-white/30 rounded-2xl p-4 backdrop-blur-md">
                        <div className="flex justify-between text-green-900 border-b border-green-800/10 pb-2 mb-2">
                            <span className="text-xs font-semibold uppercase opacity-70">Projects</span>
                            <span className="font-bold">24</span>
                        </div>
                        <div className="flex justify-between text-green-900">
                            <span className="text-xs font-semibold uppercase opacity-70">Experience</span>
                            <span className="font-bold">5 Years</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Details */}
                <div className="w-full md:w-3/5 p-8 bg-white">
                    <div className="mb-8">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <Briefcase size={18} className="text-blue-500" /> Bio
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Passionate Product Designer with a knack for creating intuitive and visually stunning user experiences.
                            Specializing in dashboard interfaces and design systems. Currently leading the design team at Probo.
                            Always learning and exploring new web technologies.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <Award size={18} className="text-orange-500" /> Skills
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {['UI/UX Design', 'React / React Native', 'Tailwind CSS', 'Figma', 'Prototyping', 'Design Systems'].map(skill => (
                                <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-gray-200 transition-colors">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <LinkIcon size={18} className="text-purple-500" /> Contact Information
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <Mail size={16} className="text-gray-400" />
                                <span>adarsh@probo.in</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <Phone size={16} className="text-gray-400" />
                                <span>+91 98765 43210</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <MapPin size={16} className="text-gray-400" />
                                <span>Bangalore, India</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-end gap-3">
                        <Button variant="outline" onClick={onClose}>Close</Button>
                        <Button variant="primary">Edit Profile</Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UserProfileModal;

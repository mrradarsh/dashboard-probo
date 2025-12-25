import React from 'react';
import { Mail, Phone, MoreHorizontal } from 'lucide-react';
import Button from './Button';

const teamMembers = [
    { name: 'Ramanand', role: 'Frontend Developer', email: 'ramanand@probo.in', avatar: 'https://i.pravatar.cc/150?img=11' },
    { name: 'Aditya', role: 'Product Designer', email: 'aditya@probo.in', avatar: 'https://i.pravatar.cc/150?img=13' },
    { name: 'Sarah Smith', role: 'Project Manager', email: 'sarah@probo.in', avatar: 'https://i.pravatar.cc/150?img=5' },
    { name: 'Mike Johnson', role: 'Backend Engineer', email: 'mike@probo.in', avatar: 'https://i.pravatar.cc/150?img=3' },
    { name: 'Priya Patel', role: 'QA Engineer', email: 'priya@probo.in', avatar: 'https://i.pravatar.cc/150?img=9' },
    { name: 'David Lee', role: 'DevOps Specialist', email: 'david@probo.in', avatar: 'https://i.pravatar.cc/150?img=8' },
];

const TeamList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
                <div key={index} className="bg-gray-50 rounded-3xl p-6 flex flex-col items-center text-center hover:shadow-md transition-all">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-white shadow-sm">
                        <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-sm text-gray-500 mb-6">{member.role}</p>

                    <div className="flex gap-3 w-full">
                        <Button size="sm" className="flex-1 bg-white border border-gray-200 text-gray-600 hover:bg-gray-100">
                            <Mail size={16} /> Contact
                        </Button>
                        <Button size="sm" variant="ghost" className="px-2">
                            <MoreHorizontal size={16} />
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TeamList;

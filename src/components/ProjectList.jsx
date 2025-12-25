import React from 'react';
import { Clock, CheckCircle2, AlertCircle, MoreVertical } from 'lucide-react';

const projects = [
    { name: 'Website Redesign', status: 'In Progress', deadline: 'Dec 25, 2024', progress: 75, color: 'bg-blue-500', members: [1, 2, 3] },
    { name: 'Mobile App Launch', status: 'Review', deadline: 'Jan 10, 2025', progress: 90, color: 'bg-indigo-500', members: [4, 5] },
    { name: 'Marketing Campaign', status: 'Planning', deadline: 'Feb 01, 2025', progress: 20, color: 'bg-orange-500', members: [2, 6] },
    { name: 'Database Migration', status: 'On Hold', deadline: 'Dec 30, 2024', progress: 45, color: 'bg-red-500', members: [3, 4, 1] },
];

const ProjectList = () => {
    return (
        <div className="flex flex-col gap-4">
            {projects.map((project, index) => (
                <div key={index} className="bg-gray-50 rounded-3xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:shadow-md transition-all">

                    <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-2xl ${project.color} bg-opacity-20 flex items-center justify-center text-${project.color.split('-')[1]}-700`}>
                            <Clock size={24} className="opacity-80" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <span>Due: {project.deadline}</span>
                                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                <span className={`px-2 py-0.5 rounded-full text-xs ${project.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                                        project.status === 'Review' ? 'bg-indigo-100 text-indigo-700' :
                                            project.status === 'Planning' ? 'bg-orange-100 text-orange-700' :
                                                'bg-red-100 text-red-700'
                                    }`}>
                                    {project.status}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-8 w-full md:w-auto mt-2 md:mt-0">
                        {/* Progress Bar */}
                        <div className="flex-1 md:w-48">
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-gray-500">Progress</span>
                                <span className="font-semibold">{project.progress}%</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className={`h-full ${project.color} rounded-full`}
                                    style={{ width: `${project.progress}%` }}
                                ></div>
                            </div>
                        </div>

                        {/* Avatars */}
                        <div className="flex -space-x-2">
                            {project.members.map((m, i) => (
                                <img key={i} src={`https://i.pravatar.cc/150?img=${10 + m}`} className="w-8 h-8 rounded-full border-2 border-white" alt="Member" />
                            ))}
                        </div>

                        <button className="text-gray-400 hover:text-gray-600">
                            <MoreVertical size={20} />
                        </button>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default ProjectList;

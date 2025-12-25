import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { ChevronRight } from 'lucide-react';

const data = [
    { name: 'Designer', value: 48, color: '#86EFAC' }, // Green
    { name: 'Developer', value: 27, color: '#334155' }, // Dark
    { name: 'Project Manager', value: 18, color: '#CBD5E1' }, // Light Grey
];

const TeamChart = () => {
    return (
        <div className="h-full flex flex-col justify-between">
            <div className="flex justify-between items-start mb-2">
                <div>
                    <p className="text-gray-400 text-xs mb-1">Total employee</p>
                    <h3 className="text-lg font-semibold">Track your team</h3>
                </div>
                <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100">
                    <ChevronRight size={16} className="text-gray-400" />
                </button>
            </div>

            <div className="h-32 w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="100%"
                            startAngle={180}
                            endAngle={0}
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={2}
                            dataKey="value"
                            stroke="none"
                            cornerRadius={10}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-2 text-center">
                    <div className="text-3xl font-bold">120</div>
                    <div className="text-xs text-gray-400">Total members</div>
                </div>
            </div>

            <div className="space-y-3 mt-4">
                {data.map((item) => (
                    <div key={item.name} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                            <span className="text-gray-600">{item.name}</span>
                        </div>
                        <span className="font-semibold">{item.value} members</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamChart;

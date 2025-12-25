import React from 'react';
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';
import { Info } from 'lucide-react';

const data = [
    { name: '1H', value: 8 },
    { name: '4H', value: 7.5 },
    { name: '8H', value: 7.8 }, // Point with tooltip
    { name: '10H', value: 10 },
    { name: '12H', value: 9.5 },
];

const WorkTimeChart = () => {
    return (
        <div className="h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-gray-500 text-sm">Average work time</h3>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="text-2xl font-semibold">46 hours</span>
                        <span className="text-green-500 text-xs font-medium bg-green-100 px-2 py-0.5 rounded-full">+0.5%</span>
                    </div>
                </div>
                <Info size={16} className="text-green-400" />
            </div>

            <div className="flex-1 w-full min-h-[100px] -ml-4">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <Tooltip
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                            cursor={{ stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '4 4' }}
                        />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#374151"
                            strokeWidth={2}
                            dot={{ r: 0 }}
                            activeDot={{ r: 6, fill: '#1f2937', stroke: '#fff', strokeWidth: 2 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="flex justify-between text-xs text-gray-400 px-2">
                <span>1 D H</span>
                <span>8 H</span>
                <span>6 H</span>
                <span>4 H</span>
            </div>
            <div className="text-[10px] text-gray-400 mt-2 flex items-center gap-1">
                <div className="w-3 h-3 rounded-full border border-gray-300 flex items-center justify-center">!</div>
                Total work hours include extra hours
            </div>
        </div>
    );
};

export default WorkTimeChart;

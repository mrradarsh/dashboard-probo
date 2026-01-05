import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const StatCard = ({ title, value, change, trend, icon: Icon, color = 'green' }) => {
    const colorClasses = {
        green: {
            bg: 'bg-green-50',
            icon: 'text-green-600',
            border: 'border-green-100',
        },
        blue: {
            bg: 'bg-blue-50',
            icon: 'text-blue-600',
            border: 'border-blue-100',
        },
        purple: {
            bg: 'bg-purple-50',
            icon: 'text-purple-600',
            border: 'border-purple-100',
        },
        orange: {
            bg: 'bg-orange-50',
            icon: 'text-orange-600',
            border: 'border-orange-100',
        },
    };

    const colors = colorClasses[color] || colorClasses.green;

    return (
        <div className="bg-gray-50 rounded-3xl p-6 transition-all hover:shadow-md border border-transparent hover:border-gray-200">
            <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 ${colors.bg} rounded-2xl flex items-center justify-center`}>
                    <Icon size={24} className={colors.icon} />
                </div>
                <div className="flex items-center gap-1">
                    {trend === 'up' ? (
                        <ArrowUpRight size={16} className="text-green-500" />
                    ) : (
                        <ArrowDownRight size={16} className="text-red-500" />
                    )}
                    <span className={`text-sm font-semibold ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                        {change}
                    </span>
                </div>
            </div>

            <h3 className="text-sm text-gray-500 mb-1">{title}</h3>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
    );
};

export default StatCard;

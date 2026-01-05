import React, { useState } from 'react';
import { TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart, Activity, ArrowUpRight, ArrowDownRight, Calendar } from 'lucide-react';
import StatCard from './StatCard';

const Statistics = () => {
    const [timeRange, setTimeRange] = useState('7d');

    const stats = [
        {
            title: 'Total Revenue',
            value: '₹2,45,890',
            change: '+12.5%',
            trend: 'up',
            icon: DollarSign,
            color: 'green',
        },
        {
            title: 'Active Users',
            value: '1,248',
            change: '+8.2%',
            trend: 'up',
            icon: Users,
            color: 'blue',
        },
        {
            title: 'Total Orders',
            value: '456',
            change: '-2.4%',
            trend: 'down',
            icon: ShoppingCart,
            color: 'purple',
        },
        {
            title: 'Conversion Rate',
            value: '3.24%',
            change: '+0.8%',
            trend: 'up',
            icon: Activity,
            color: 'orange',
        },
    ];

    const detailedStats = [
        { label: 'Today', value: '₹12,450', change: '+5.2%', trend: 'up' },
        { label: 'This Week', value: '₹84,320', change: '+12.5%', trend: 'up' },
        { label: 'This Month', value: '₹3,45,670', change: '+8.9%', trend: 'up' },
        { label: 'This Year', value: '₹42,56,890', change: '+15.3%', trend: 'up' },
    ];

    const topProducts = [
        { name: 'Premium Plan', sales: 1250, revenue: '₹62,500', growth: '+18%' },
        { name: 'Standard Plan', sales: 890, revenue: '₹35,600', growth: '+12%' },
        { name: 'Basic Plan', sales: 645, revenue: '₹19,350', growth: '+8%' },
        { name: 'Enterprise', sales: 234, revenue: '₹46,800', growth: '+22%' },
    ];

    const recentActivity = [
        { action: 'New user signup', time: '2 minutes ago', type: 'user' },
        { action: 'Payment received ₹2,500', time: '5 minutes ago', type: 'payment' },
        { action: 'Order #1234 completed', time: '12 minutes ago', type: 'order' },
        { action: 'New user signup', time: '18 minutes ago', type: 'user' },
        { action: 'Payment received ₹5,000', time: '25 minutes ago', type: 'payment' },
    ];

    return (
        <div className="animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-semibold tracking-tight mb-2">Statistics</h1>
                    <p className="text-gray-500">Overview of your business metrics and performance</p>
                </div>

                {/* Time Range Selector */}
                <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-full">
                    {[
                        { label: '7D', value: '7d' },
                        { label: '30D', value: '30d' },
                        { label: '3M', value: '3m' },
                        { label: '1Y', value: '1y' },
                    ].map((range) => (
                        <button
                            key={range.value}
                            onClick={() => setTimeRange(range.value)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${timeRange === range.value
                                    ? 'bg-white text-gray-900 shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            {range.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>

            {/* Detailed Stats and Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Revenue Breakdown */}
                <div className="lg:col-span-2 bg-gray-50 rounded-3xl p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-semibold">Revenue Breakdown</h3>
                        <Calendar size={20} className="text-gray-400" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {detailedStats.map((stat, index) => (
                            <div key={index} className="bg-white rounded-2xl p-4">
                                <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                                <p className="text-xl font-bold mb-1">{stat.value}</p>
                                <div className="flex items-center gap-1">
                                    {stat.trend === 'up' ? (
                                        <ArrowUpRight size={14} className="text-green-500" />
                                    ) : (
                                        <ArrowDownRight size={14} className="text-red-500" />
                                    )}
                                    <span className={`text-xs font-medium ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                                        {stat.change}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Simple Bar Chart Visualization */}
                    <div className="mt-6 space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-500 w-20">Today</span>
                            <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                                <div className="bg-green-500 h-full rounded-full" style={{ width: '35%' }}></div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-500 w-20">This Week</span>
                            <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                                <div className="bg-blue-500 h-full rounded-full" style={{ width: '68%' }}></div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-500 w-20">This Month</span>
                            <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                                <div className="bg-purple-500 h-full rounded-full" style={{ width: '85%' }}></div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-500 w-20">This Year</span>
                            <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                                <div className="bg-orange-500 h-full rounded-full" style={{ width: '100%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-gray-50 rounded-3xl p-6">
                    <h3 className="text-lg font-semibold mb-6">Recent Activity</h3>
                    <div className="space-y-4">
                        {recentActivity.map((activity, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <div className={`w-2 h-2 mt-2 rounded-full ${activity.type === 'payment' ? 'bg-green-500' :
                                        activity.type === 'user' ? 'bg-blue-500' :
                                            'bg-purple-500'
                                    }`}></div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                                    <p className="text-xs text-gray-500">{activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Top Products */}
            <div className="bg-gray-50 rounded-3xl p-6">
                <h3 className="text-lg font-semibold mb-6">Top Performing Products</h3>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Product</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Sales</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Revenue</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Growth</th>
                            </tr>
                        </thead>
                        <tbody>
                            {topProducts.map((product, index) => (
                                <tr key={index} className="border-b border-gray-100 hover:bg-white transition-colors">
                                    <td className="py-4 px-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gray-200 rounded-lg"></div>
                                            <span className="font-medium">{product.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">{product.sales}</td>
                                    <td className="py-4 px-4 font-semibold">{product.revenue}</td>
                                    <td className="py-4 px-4">
                                        <span className="text-green-600 font-medium flex items-center gap-1">
                                            <ArrowUpRight size={14} />
                                            {product.growth}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Statistics;

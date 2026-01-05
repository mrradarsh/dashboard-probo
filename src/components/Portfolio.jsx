import React, { useState } from 'react';
import { TrendingUp, TrendingDown, DollarSign, PieChart, ArrowUpRight, ArrowDownRight, Plus, Filter } from 'lucide-react';
import Button from './Button';

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const portfolioSummary = {
        totalValue: '₹8,45,670',
        totalInvested: '₹6,50,000',
        totalProfit: '₹1,95,670',
        profitPercentage: '+30.1%',
        dayChange: '+₹12,450',
        dayChangePercent: '+1.5%',
    };

    const holdings = [
        {
            name: 'Tech Stocks',
            symbol: 'TECH',
            quantity: 150,
            avgPrice: '₹1,200',
            currentPrice: '₹1,580',
            invested: '₹1,80,000',
            current: '₹2,37,000',
            profit: '₹57,000',
            profitPercent: '+31.7%',
            trend: 'up',
            color: 'bg-blue-500',
        },
        {
            name: 'Banking Sector',
            symbol: 'BANK',
            quantity: 200,
            avgPrice: '₹850',
            currentPrice: '₹1,120',
            invested: '₹1,70,000',
            current: '₹2,24,000',
            profit: '₹54,000',
            profitPercent: '+31.8%',
            trend: 'up',
            color: 'bg-green-500',
        },
        {
            name: 'Pharma Index',
            symbol: 'PHRM',
            quantity: 100,
            avgPrice: '₹950',
            currentPrice: '₹1,180',
            invested: '₹95,000',
            current: '₹1,18,000',
            profit: '₹23,000',
            profitPercent: '+24.2%',
            trend: 'up',
            color: 'bg-purple-500',
        },
        {
            name: 'Energy Fund',
            symbol: 'ENRG',
            quantity: 80,
            avgPrice: '₹1,500',
            currentPrice: '₹1,350',
            invested: '₹1,20,000',
            current: '₹1,08,000',
            profit: '-₹12,000',
            profitPercent: '-10.0%',
            trend: 'down',
            color: 'bg-orange-500',
        },
    ];

    const recentTransactions = [
        { type: 'buy', name: 'Tech Stocks', quantity: 50, price: '₹1,580', date: '2 hours ago', status: 'completed' },
        { type: 'sell', name: 'Energy Fund', quantity: 20, price: '₹1,350', date: '5 hours ago', status: 'completed' },
        { type: 'buy', name: 'Banking Sector', quantity: 100, price: '₹1,120', date: '1 day ago', status: 'completed' },
        { type: 'buy', name: 'Pharma Index', quantity: 50, price: '₹1,180', date: '2 days ago', status: 'completed' },
    ];

    return (
        <div className="animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-semibold tracking-tight mb-2">Portfolio</h1>
                    <p className="text-gray-500">Track your investments and performance</p>
                </div>

                <div className="flex items-center gap-3">
                    <Button icon={Filter}>
                        Filter
                    </Button>
                    <Button variant="primary" icon={Plus}>
                        Add Investment
                    </Button>
                </div>
            </div>

            {/* Portfolio Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                        <DollarSign size={20} />
                        <span className="text-sm opacity-90">Total Value</span>
                    </div>
                    <p className="text-3xl font-bold mb-2">{portfolioSummary.totalValue}</p>
                    <div className="flex items-center gap-1 text-sm">
                        <ArrowUpRight size={14} />
                        <span>{portfolioSummary.dayChange} ({portfolioSummary.dayChangePercent})</span>
                    </div>
                </div>

                <div className="bg-gray-50 rounded-3xl p-6">
                    <div className="flex items-center gap-2 mb-2 text-gray-600">
                        <TrendingUp size={20} />
                        <span className="text-sm">Total Invested</span>
                    </div>
                    <p className="text-3xl font-bold mb-2">{portfolioSummary.totalInvested}</p>
                    <p className="text-sm text-gray-500">Original investment</p>
                </div>

                <div className="bg-gray-50 rounded-3xl p-6">
                    <div className="flex items-center gap-2 mb-2 text-gray-600">
                        <PieChart size={20} />
                        <span className="text-sm">Total Profit</span>
                    </div>
                    <p className="text-3xl font-bold text-green-600 mb-2">{portfolioSummary.totalProfit}</p>
                    <p className="text-sm text-green-600 font-semibold">{portfolioSummary.profitPercentage}</p>
                </div>

                <div className="bg-gray-50 rounded-3xl p-6">
                    <div className="flex items-center gap-2 mb-2 text-gray-600">
                        <TrendingUp size={20} />
                        <span className="text-sm">Holdings</span>
                    </div>
                    <p className="text-3xl font-bold mb-2">{holdings.length}</p>
                    <p className="text-sm text-gray-500">Active positions</p>
                </div>
            </div>

            {/* Holdings Table */}
            <div className="bg-gray-50 rounded-3xl p-6 mb-8">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">Current Holdings</h3>
                    <div className="flex items-center gap-2 bg-white p-1 rounded-full">
                        {['all', 'stocks', 'mutual funds', 'bonds'].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize transition-all ${activeFilter === filter
                                        ? 'bg-gray-900 text-white'
                                        : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Name</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Quantity</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Avg Price</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Current Price</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Invested</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Current Value</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Profit/Loss</th>
                            </tr>
                        </thead>
                        <tbody>
                            {holdings.map((holding, index) => (
                                <tr key={index} className="border-b border-gray-100 hover:bg-white transition-colors">
                                    <td className="py-4 px-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-10 h-10 ${holding.color} rounded-lg flex items-center justify-center text-white font-bold text-sm`}>
                                                {holding.symbol.substring(0, 2)}
                                            </div>
                                            <div>
                                                <p className="font-medium">{holding.name}</p>
                                                <p className="text-xs text-gray-500">{holding.symbol}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">{holding.quantity}</td>
                                    <td className="py-4 px-4 text-gray-700">{holding.avgPrice}</td>
                                    <td className="py-4 px-4 font-semibold">{holding.currentPrice}</td>
                                    <td className="py-4 px-4 text-gray-700">{holding.invested}</td>
                                    <td className="py-4 px-4 font-semibold">{holding.current}</td>
                                    <td className="py-4 px-4">
                                        <div className="flex flex-col">
                                            <span className={`font-semibold ${holding.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                                                {holding.profit}
                                            </span>
                                            <span className={`text-xs ${holding.trend === 'up' ? 'text-green-600' : 'text-red-600'} flex items-center gap-1`}>
                                                {holding.trend === 'up' ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                                                {holding.profitPercent}
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-gray-50 rounded-3xl p-6">
                <h3 className="text-lg font-semibold mb-6">Recent Transactions</h3>
                <div className="space-y-4">
                    {recentTransactions.map((transaction, index) => (
                        <div key={index} className="bg-white rounded-2xl p-4 flex items-center justify-between hover:shadow-sm transition-all">
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${transaction.type === 'buy' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                                    }`}>
                                    {transaction.type === 'buy' ? <ArrowDownRight size={20} /> : <ArrowUpRight size={20} />}
                                </div>
                                <div>
                                    <p className="font-medium">{transaction.type === 'buy' ? 'Bought' : 'Sold'} {transaction.name}</p>
                                    <p className="text-sm text-gray-500">
                                        {transaction.quantity} units @ {transaction.price}
                                    </p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-500">{transaction.date}</p>
                                <span className="inline-block px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium mt-1">
                                    {transaction.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;

import React, { useState } from 'react';
import DetailModal from './DetailModal';
import { DollarSign, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const users = [
    {
        name: 'Syafanah san',
        amount: '$2,540.00',
        date: 'Today',
        status: 'Waiting',
        img: 'https://i.pravatar.cc/150?img=5',
        role: 'Senior Developer',
        department: 'Engineering',
        paymentMethod: 'Bank Transfer',
        accountNumber: '****1234'
    },
    {
        name: 'Devon Lane',
        amount: '$2,540.00',
        date: 'Today',
        status: 'Done',
        img: 'https://i.pravatar.cc/150?img=4',
        role: 'Product Designer',
        department: 'Design',
        paymentMethod: 'Direct Deposit',
        accountNumber: '****5678'
    },
    {
        name: 'Marvin McKinney',
        amount: '$2,540.00',
        date: 'Yesterday',
        status: 'Done',
        img: 'https://i.pravatar.cc/150?img=3',
        role: 'Marketing Manager',
        department: 'Marketing',
        paymentMethod: 'Bank Transfer',
        accountNumber: '****9012'
    },
    {
        name: 'Devon Lane',
        amount: '$2,540.00',
        date: 'Yesterday',
        status: 'Done',
        img: 'https://i.pravatar.cc/150?img=2',
        role: 'Sales Executive',
        department: 'Sales',
        paymentMethod: 'Direct Deposit',
        accountNumber: '****3456'
    },
    {
        name: 'Eleanor Pena',
        amount: '$2,540.00',
        date: 'Yesterday',
        status: 'Failed',
        img: 'https://i.pravatar.cc/150?img=1',
        role: 'HR Manager',
        department: 'Human Resources',
        paymentMethod: 'Bank Transfer',
        accountNumber: '****7890'
    },
];

const getStatusStyle = (status) => {
    switch (status) {
        case 'Waiting': return 'bg-yellow-100 text-yellow-700';
        case 'Done': return 'border border-gray-200 text-gray-500';
        case 'Failed': return 'bg-red-50 text-red-500 border border-red-100';
        default: return 'text-gray-500';
    }
};

const SalaryList = () => {
    const [selectedUser, setSelectedUser] = useState(null);

    return (
        <>
            <div className="space-y-4">
                {users.map((user, i) => (
                    <div
                        key={i}
                        onClick={() => setSelectedUser(user)}
                        className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded-xl transition-all"
                    >
                        <div className="flex items-center gap-3">
                            <img src={user.img} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
                            <div>
                                <h4 className="text-sm font-semibold">{user.name}</h4>
                                <p className="text-xs text-gray-400">{user.amount} <span className="mx-1">•</span> {user.date}</p>
                            </div>
                        </div>
                        <span className={`text-[10px] uppercase font-bold px-3 py-1 rounded-full ${getStatusStyle(user.status)}`}>
                            {user.status === 'Waiting' && <span className="mr-1 inline-block w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>}
                            {user.status === 'Done' && <span className="mr-1 inline-block w-1.5 h-1.5 bg-green-500 rounded-full"></span>}
                            {user.status === 'Failed' && <span className="mr-1 inline-block w-1.5 h-1.5 bg-red-500 rounded-full"></span>}
                            {user.status}
                        </span>
                    </div>
                ))}
            </div>

            {/* Payment Detail Modal */}
            <DetailModal
                isOpen={selectedUser !== null}
                onClose={() => setSelectedUser(null)}
                title="Payment Details"
                icon={DollarSign}
            >
                {selectedUser && (
                    <div className="space-y-6">
                        {/* Employee Info */}
                        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                            <img
                                src={selectedUser.img}
                                alt={selectedUser.name}
                                className="w-16 h-16 rounded-full"
                            />
                            <div>
                                <h3 className="font-semibold text-lg">{selectedUser.name}</h3>
                                <p className="text-sm text-gray-500">{selectedUser.role}</p>
                                <p className="text-xs text-gray-400">{selectedUser.department}</p>
                            </div>
                        </div>

                        {/* Payment Status */}
                        <div className={`p-4 rounded-2xl ${selectedUser.status === 'Done' ? 'bg-green-50 border border-green-100' :
                                selectedUser.status === 'Waiting' ? 'bg-yellow-50 border border-yellow-100' :
                                    'bg-red-50 border border-red-100'
                            }`}>
                            <div className="flex items-center gap-3 mb-2">
                                {selectedUser.status === 'Done' && <CheckCircle className="text-green-600" size={24} />}
                                {selectedUser.status === 'Waiting' && <AlertCircle className="text-yellow-600" size={24} />}
                                {selectedUser.status === 'Failed' && <XCircle className="text-red-600" size={24} />}
                                <div>
                                    <p className={`font-semibold ${selectedUser.status === 'Done' ? 'text-green-800' :
                                            selectedUser.status === 'Waiting' ? 'text-yellow-800' :
                                                'text-red-800'
                                        }`}>
                                        Payment {selectedUser.status}
                                    </p>
                                    <p className="text-xs text-gray-600">
                                        {selectedUser.status === 'Done' && 'Payment has been successfully processed'}
                                        {selectedUser.status === 'Waiting' && 'Payment is being processed'}
                                        {selectedUser.status === 'Failed' && 'Payment failed - Please retry'}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Payment Details */}
                        <div className="space-y-3">
                            <h4 className="font-semibold">Transaction Details</h4>
                            <div className="space-y-2">
                                <div className="flex justify-between py-2 border-b border-gray-100">
                                    <span className="text-sm text-gray-500">Amount</span>
                                    <span className="font-semibold">{selectedUser.amount}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-gray-100">
                                    <span className="text-sm text-gray-500">Payment Date</span>
                                    <span className="font-semibold">{selectedUser.date}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-gray-100">
                                    <span className="text-sm text-gray-500">Payment Method</span>
                                    <span className="font-semibold">{selectedUser.paymentMethod}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-gray-100">
                                    <span className="text-sm text-gray-500">Account Number</span>
                                    <span className="font-semibold font-mono">{selectedUser.accountNumber}</span>
                                </div>
                            </div>
                        </div>

                        {/* Breakdown */}
                        <div className="space-y-3">
                            <h4 className="font-semibold">Salary Breakdown</h4>
                            <div className="bg-gray-50 rounded-2xl p-4 space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Basic Salary</span>
                                    <span className="font-medium">$2,000.00</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Performance Bonus</span>
                                    <span className="font-medium text-green-600">+$300.00</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Incentives</span>
                                    <span className="font-medium text-green-600">+$240.00</span>
                                </div>
                                <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between font-semibold">
                                    <span>Total</span>
                                    <span className="text-lg">{selectedUser.amount}</span>
                                </div>
                            </div>
                        </div>

                        {/* Action Button */}
                        {selectedUser.status === 'Failed' && (
                            <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors">
                                Retry Payment
                            </button>
                        )}
                    </div>
                )}
            </DetailModal>
        </>
    );
};

export default SalaryList;

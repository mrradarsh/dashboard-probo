import React from 'react';

const users = [
    { name: 'Syafanah san', amount: '$2,540.00', date: 'Today', status: 'Waiting', img: 'https://i.pravatar.cc/150?img=5' },
    { name: 'Devon Lane', amount: '$2,540.00', date: 'Today', status: 'Done', img: 'https://i.pravatar.cc/150?img=4' },
    { name: 'Marvin McKinney', amount: '$2,540.00', date: 'Yesterday', status: 'Done', img: 'https://i.pravatar.cc/150?img=3' },
    { name: 'Devon Lane', amount: '$2,540.00', date: 'Yesterday', status: 'Done', img: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Eleanor Pena', amount: '$2,540.00', date: 'Yesterday', status: 'Failed', img: 'https://i.pravatar.cc/150?img=1' },
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
    return (
        <div className="space-y-4">
            {users.map((user, i) => (
                <div key={i} className="flex items-center justify-between">
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
    );
};

export default SalaryList;

import React from 'react';
import { Wallet, Gift, FileText } from 'lucide-react';

const PaymentCard = () => {
    return (
        <div className="bg-[#3D5A73] rounded-3xl p-6 text-white mt-auto">
            <div className="bg-green-400/20 backdrop-blur-md rounded-xl p-3 flex justify-between items-center mb-6">
                <span className="text-green-300 text-sm font-medium">Basic salary</span>
                <span className="font-semibold">$2,040</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-xl p-3 text-gray-900">
                    <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                        <span className="w-2 h-2 bg-black rounded-full"></span> Perform
                    </div>
                    <div className="font-bold">$300</div>
                </div>
                <div className="bg-[#527CA6] rounded-xl p-3 text-white">
                    <div className="text-xs text-white/70 mb-1 flex items-center gap-1">
                        <Gift size={12} /> Gift
                    </div>
                    <div className="font-bold">$200</div>
                </div>
            </div>

            <div className="flex justify-between items-center mb-4">
                <div>
                    <div className="text-xs text-gray-300">Payment</div>
                    <div className="text-3xl font-bold">100%</div>
                </div>

                <div className="text-right">
                    <div className="text-xs text-gray-300">Take home pay</div>
                    <div className="text-2xl font-semibold">$2,540.00</div>
                </div>
            </div>

            <div className="flex gap-2">
                <button className="p-3 bg-white/10 rounded-xl hover:bg-white/20">
                    <FileText size={18} />
                </button>
                <button className="p-3 bg-green-400 text-green-900 rounded-xl flex-1 flex items-center justify-center gap-2 font-medium hover:bg-green-300">
                    <Wallet size={18} /> Pay now
                </button>
            </div>
        </div>
    );
};

export default PaymentCard;

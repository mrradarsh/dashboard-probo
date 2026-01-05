import React, { useState } from 'react';
import { Wallet, Gift, FileText, Download, CheckCircle } from 'lucide-react';
import DetailModal from './DetailModal';

const PaymentCard = () => {
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handlePayment = () => {
        setPaymentSuccess(true);
        setTimeout(() => {
            setPaymentSuccess(false);
            setShowPaymentModal(false);
        }, 2000);
    };

    return (
        <>
            <div
                className="bg-[#3D5A73] rounded-3xl p-6 text-white mt-auto cursor-pointer hover:shadow-lg transition-all"
                onClick={() => setShowPaymentModal(true)}
            >
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
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowPaymentModal(true);
                        }}
                        className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                    >
                        <FileText size={18} />
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowPaymentModal(true);
                        }}
                        className="p-3 bg-green-400 text-green-900 rounded-xl flex-1 flex items-center justify-center gap-2 font-medium hover:bg-green-300 transition-colors"
                    >
                        <Wallet size={18} /> Pay now
                    </button>
                </div>
            </div>

            {/* Payment Detail Modal */}
            <DetailModal
                isOpen={showPaymentModal}
                onClose={() => setShowPaymentModal(false)}
                title="Payment Summary"
                icon={Wallet}
            >
                {paymentSuccess ? (
                    <div className="text-center py-12">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle size={40} className="text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-green-600 mb-2">Payment Successful!</h3>
                        <p className="text-gray-600">Your payment has been processed successfully</p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {/* Salary Breakdown */}
                        <div className="bg-gradient-to-br from-[#3D5A73] to-[#527CA6] rounded-2xl p-6 text-white">
                            <p className="text-sm opacity-80 mb-2">Total Take Home Pay</p>
                            <p className="text-4xl font-bold mb-4">$2,540.00</p>
                            <div className="flex items-center gap-2 text-sm">
                                <CheckCircle size={16} />
                                <span>Ready for payment</span>
                            </div>
                        </div>

                        {/* Detailed Breakdown */}
                        <div className="space-y-3">
                            <h3 className="font-semibold">Payment Breakdown</h3>
                            <div className="bg-gray-50 rounded-2xl p-4 space-y-3">
                                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                                    <div>
                                        <p className="font-medium">Basic Salary</p>
                                        <p className="text-xs text-gray-500">Monthly base pay</p>
                                    </div>
                                    <span className="font-semibold text-lg">$2,040.00</span>
                                </div>

                                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                                    <div>
                                        <p className="font-medium">Performance Bonus</p>
                                        <p className="text-xs text-gray-500">Based on KPIs</p>
                                    </div>
                                    <span className="font-semibold text-lg text-green-600">+$300.00</span>
                                </div>

                                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                                    <div>
                                        <p className="font-medium">Gift/Incentive</p>
                                        <p className="text-xs text-gray-500">Special bonus</p>
                                    </div>
                                    <span className="font-semibold text-lg text-green-600">+$200.00</span>
                                </div>

                                <div className="flex justify-between items-center pt-2">
                                    <div>
                                        <p className="font-bold">Total Amount</p>
                                        <p className="text-xs text-gray-500">100% of salary</p>
                                    </div>
                                    <span className="font-bold text-2xl text-gray-900">$2,540.00</span>
                                </div>
                            </div>
                        </div>

                        {/* Payment Details */}
                        <div className="space-y-3">
                            <h3 className="font-semibold">Payment Information</h3>
                            <div className="space-y-2">
                                <div className="flex justify-between py-2 border-b border-gray-100">
                                    <span className="text-sm text-gray-500">Payment Method</span>
                                    <span className="font-semibold">Direct Deposit</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-gray-100">
                                    <span className="text-sm text-gray-500">Account</span>
                                    <span className="font-semibold font-mono">****4567</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-gray-100">
                                    <span className="text-sm text-gray-500">Payment Date</span>
                                    <span className="font-semibold">Today</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-gray-100">
                                    <span className="text-sm text-gray-500">Status</span>
                                    <span className="font-semibold text-green-600">Ready to Process</span>
                                </div>
                            </div>
                        </div>

                        {/* Tax Information */}
                        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
                            <p className="text-sm font-semibold text-blue-800 mb-1">Tax Information</p>
                            <p className="text-xs text-blue-700">All taxes and deductions have been applied. Net amount shown above.</p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                            <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                                <Download size={18} />
                                Download Slip
                            </button>
                            <button
                                onClick={handlePayment}
                                className="flex-1 bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                            >
                                <Wallet size={18} />
                                Process Payment
                            </button>
                        </div>
                    </div>
                )}
            </DetailModal>
        </>
    );
};

export default PaymentCard;

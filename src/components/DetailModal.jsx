import React from 'react';
import { X, TrendingUp, Clock, Calendar, Database } from 'lucide-react';

const DetailModal = ({ isOpen, onClose, title, children, icon: Icon }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in slide-in-from-bottom-4 duration-300">
                <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between rounded-t-3xl">
                    <div className="flex items-center gap-3">
                        {Icon && (
                            <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                                <Icon size={20} className="text-green-600" />
                            </div>
                        )}
                        <h2 className="text-xl font-semibold">{title}</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>
                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DetailModal;

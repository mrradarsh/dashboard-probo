import React, { useState } from 'react';
import { FileText, Download, X, Eye, File, Image as ImageIcon } from 'lucide-react';
import Button from './Button';

const documents = [
    { id: 1, name: 'Project_Requirements_v2.pdf', type: 'pdf', size: '2.4 MB', date: 'Nov 10, 2024', author: 'Sarah Smith' },
    { id: 2, name: 'Brand_Guidelines.pdf', type: 'pdf', size: '5.1 MB', date: 'Nov 12, 2024', author: 'Aditya' },
    { id: 3, name: 'Q4_Financial_Report.xlsx', type: 'sheet', size: '1.2 MB', date: 'Nov 15, 2024', author: 'Mike Johnson' },
    { id: 4, name: 'Homepage_Hero_Image.png', type: 'image', size: '4.8 MB', date: 'Nov 18, 2024', author: 'Ramanand' },
    { id: 5, name: 'Contract_Draft_Final.docx', type: 'doc', size: '0.8 MB', date: 'Nov 20, 2024', author: 'Sarah Smith' },
];

const DocumentList = () => {
    const [selectedDoc, setSelectedDoc] = useState(null);

    const getIcon = (type) => {
        switch (type) {
            case 'pdf': return <FileText className="text-red-500" />;
            case 'image': return <ImageIcon className="text-purple-500" />;
            case 'sheet': return <File className="text-green-500" />;
            default: return <File className="text-blue-500" />;
        }
    };

    return (
        <div className="relative">
            <div className="grid grid-cols-1 gap-4">
                {documents.map((doc) => (
                    <div
                        key={doc.id}
                        onClick={() => setSelectedDoc(doc)}
                        className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between hover:bg-gray-100 cursor-pointer transition-all group"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                                {getIcon(doc.type)}
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{doc.name}</h3>
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                    <span>{doc.size}</span>
                                    <span>•</span>
                                    <span>{doc.date}</span>
                                    <span>•</span>
                                    <span>{doc.author}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <Button size="sm" variant="ghost" className="hidden group-hover:flex">
                                <Eye size={18} />
                            </Button>
                            <Button size="sm" variant="ghost">
                                <Download size={18} />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Preview Modal */}
            {selectedDoc && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">{getIcon(selectedDoc.type)}</div>
                                <div>
                                    <h3 className="font-semibold text-lg">{selectedDoc.name}</h3>
                                    <p className="text-sm text-gray-500">Preview Mode</p>
                                </div>
                            </div>
                            <button onClick={() => setSelectedDoc(null)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="p-10 flex flex-col items-center justify-center bg-gray-50 min-h-[300px]">
                            {selectedDoc.type === 'image' ? (
                                <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center">
                                    <ImageIcon size={48} className="text-gray-400" />
                                    <span className="ml-2 text-gray-500">Image Preview Placeholder</span>
                                </div>
                            ) : (
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                                        {getIcon(selectedDoc.type)}
                                    </div>
                                    <p className="text-gray-600 max-w-md mx-auto">
                                        This is a simulated preview for <b>{selectedDoc.name}</b>. In a real application, the file content would be rendered here.
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className="p-6 border-t border-gray-100 flex justify-end gap-3">
                            <Button variant="ghost" onClick={() => setSelectedDoc(null)}>Close</Button>
                            <Button variant="primary" icon={Download}>Download File</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DocumentList;

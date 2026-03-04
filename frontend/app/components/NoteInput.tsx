"use client";

import { useState } from 'react';
import { CheckSquare, Image as ImageIcon, PaintBucket, Users, BellPlus, MoreVertical, Undo, Redo, Pin } from 'lucide-react';

export default function NoteInput() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleClose = () => {
        setIsExpanded(false);
        setTitle('');
        setContent('');
    };

    return (
        <div className="w-full max-w-2xl mx-auto my-8 relative">
            <div
                className={`bg-white dark:bg-[#202124] rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden ${isExpanded ? 'shadow-lg hover:shadow-lg' : ''
                    }`}
            >
                {isExpanded && (
                    <div className="flex items-center justify-between px-4 pt-3 pb-1">
                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full text-base font-medium bg-transparent outline-none border-none placeholder-gray-500 dark:placeholder-gray-400 dark:text-gray-200"
                        />
                        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300 rounded-full transition-colors">
                            <Pin className="w-5 h-5" />
                        </button>
                    </div>
                )}

                <div className="flex items-center px-4 py-3">
                    <input
                        type="text"
                        placeholder={isExpanded ? 'Take a note...' : 'Take a note...'}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        onClick={() => setIsExpanded(true)}
                        className="w-full text-sm bg-transparent outline-none border-none placeholder-gray-500 dark:placeholder-gray-400 dark:text-gray-200 font-medium"
                    />
                    {!isExpanded && (
                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 ml-2">
                            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors tooltip" aria-label="New list">
                                <CheckSquare className="w-5 h-5" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors tooltip" aria-label="New note with drawing">
                                <PaintBucket className="w-5 h-5" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors tooltip" aria-label="New note with image">
                                <ImageIcon className="w-5 h-5" />
                            </button>
                        </div>
                    )}
                </div>

                {isExpanded && (
                    <div className="flex items-center justify-between px-3 py-2 bg-white dark:bg-[#202124]">
                        <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors tooltip" aria-label="Remind me">
                                <BellPlus className="w-[18px] h-[18px]" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors tooltip" aria-label="Collaborator">
                                <Users className="w-[18px] h-[18px]" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors tooltip" aria-label="Background options">
                                <PaintBucket className="w-[18px] h-[18px]" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors tooltip" aria-label="Add image">
                                <ImageIcon className="w-[18px] h-[18px]" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors tooltip" aria-label="More">
                                <MoreVertical className="w-[18px] h-[18px]" />
                            </button>
                            <button className="p-2 text-gray-300 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors tooltip" aria-label="Undo">
                                <Undo className="w-[18px] h-[18px]" />
                            </button>
                            <button className="p-2 text-gray-300 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors tooltip" aria-label="Redo">
                                <Redo className="w-[18px] h-[18px]" />
                            </button>
                        </div>
                        <button
                            onClick={handleClose}
                            className="px-6 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded border border-transparent transition-colors"
                        >
                            Close
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

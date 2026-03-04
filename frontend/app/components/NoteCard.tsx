"use client";

import { BellPlus, Users, PaintBucket, Image as ImageIcon, Archive, MoreVertical, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export interface Note {
    id: string;
    title: string;
    content: string;
    color?: string;
    selected?: boolean;
}

interface NoteCardProps {
    note: Note;
}

export default function NoteCard({ note }: NoteCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group relative flex flex-col p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#202124] hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,0.15)] transition-all duration-200 ease-in-out hover:-translate-y-0.5"
            style={{ backgroundColor: note.color }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`absolute -top-3 -left-3 p-1 rounded-full bg-black/50 text-white cursor-pointer transition-opacity duration-200 z-10 ${isHovered || note.selected ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                <CheckCircle2 className={`w-5 h-5 ${note.selected ? 'text-blue-500 bg-white rounded-full' : ''}`} />
            </div>

            <div className="mb-2">
                <h3 className="font-medium text-gray-800 dark:text-gray-200 line-clamp-2">{note.title}</h3>
            </div>
            <div className="flex-1">
                <p className="text-gray-600 dark:text-gray-300 text-sm whitespace-pre-wrap break-words">
                    {note.content}
                </p>
            </div>

            <div
                className={`mt-4 flex items-center justify-between text-gray-500 dark:text-gray-400 transition-opacity duration-200 ${isHovered ? 'opacity-100 visible' : 'opacity-0 invisible h-0'
                    }`}
            >
                <div className="flex items-center gap-1 -ml-2">
                    <button className="p-1.5 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors tooltip">
                        <BellPlus className="w-[18px] h-[18px]" />
                    </button>
                    <button className="p-1.5 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors tooltip">
                        <Users className="w-[18px] h-[18px]" />
                    </button>
                    <button className="p-1.5 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors tooltip">
                        <PaintBucket className="w-[18px] h-[18px]" />
                    </button>
                    <button className="p-1.5 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors tooltip">
                        <ImageIcon className="w-[18px] h-[18px]" />
                    </button>
                    <button className="p-1.5 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors tooltip">
                        <Archive className="w-[18px] h-[18px]" />
                    </button>
                    <button className="p-1.5 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors tooltip">
                        <MoreVertical className="w-[18px] h-[18px]" />
                    </button>
                </div>
            </div>
        </div>
    );
}

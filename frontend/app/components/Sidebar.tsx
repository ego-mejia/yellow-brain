import { Lightbulb, Bell, Edit3, Archive, Trash2 } from 'lucide-react';

const navItems = [
    { icon: Lightbulb, label: 'Notes', active: true },
    { icon: Bell, label: 'Reminders', active: false },
    { icon: Edit3, label: 'Edit labels', active: false },
    { icon: Archive, label: 'Archive', active: false },
    { icon: Trash2, label: 'Trash', active: false },
];

export default function Sidebar() {
    return (
        <aside className="w-64 flex-shrink-0 pt-2 h-[calc(100vh-64px)] overflow-y-auto hidden md:block">
            <nav className="flex flex-col gap-1">
                {navItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <button
                            key={index}
                            className={`flex items-center gap-6 px-6 py-3 rounded-r-full transition-colors ${item.active
                                    ? 'bg-[#feefc3] dark:bg-[#41331c] text-gray-900 dark:text-amber-100'
                                    : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                                }`}
                        >
                            <Icon className="w-5 h-5" />
                            <span className="font-medium">{item.label}</span>
                        </button>
                    );
                })}
            </nav>
        </aside>
    );
}

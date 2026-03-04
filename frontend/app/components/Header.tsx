import { Menu, Search, RefreshCcw, Settings, Grid, UserRound, CheckSquare, Image as ImageIcon } from 'lucide-react';

export default function Header() {
    return (
        <header className="flex items-center justify-between px-4 py-2 bg-white dark:bg-[#202124] border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
            <div className="flex items-center gap-4">
                <button className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <Menu className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>
                <div className="flex items-center gap-2">
                    <img
                        src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
                        alt="Keep Logo"
                        className="w-10 h-10 object-contain"
                    />
                    <span className="text-xl font-medium text-gray-600 dark:text-gray-300 hidden sm:inline-block">
                        Keep
                    </span>
                </div>
            </div>

            <div className="flex-1 max-w-2xl px-8 hidden md:block">
                <div className="flex items-center bg-gray-100 dark:bg-[#525355] rounded-lg px-4 py-2 focus-within:bg-white focus-within:shadow-md dark:focus-within:bg-gray-800 transition-all border border-transparent focus-within:border-gray-200 dark:focus-within:border-gray-600">
                    <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-500 dark:text-gray-300">
                        <Search className="w-5 h-5" />
                    </button>
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-transparent border-none outline-none px-2 text-gray-700 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
                    />
                </div>
            </div>

            <div className="flex items-center gap-2">
                <button className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors hidden md:block">
                    <RefreshCcw className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>
                <button className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors hidden sm:block">
                    <Grid className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>
                <button className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <Settings className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>
                <div className="ml-4 pl-4 border-l border-gray-200 dark:border-gray-700">
                    <button className="p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
                        <UserRound className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </header>
    );
}

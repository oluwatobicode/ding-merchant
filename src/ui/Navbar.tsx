import { Bell, CircleHelp, ChevronDown, Search } from "lucide-react";
// import { useState } from "react";

const Navbar = () => {
  //   // State to manage active tab (Visual only for now)
  //   const [activeTab, setActiveTab] = useState("Transactions");

  //   const navLinks = ["Overview", "Transactions", "Wallet", "Users", "Settings"];

  return (
    <nav className="w-full bg-white border-b border-[#EFEFEF]">
      <div className="max-w-[1400px] mx-auto px-8 py-4 flex items-center justify-between">
        <div className="shrink-0 flex items-center gap-2">
          <div className="flex items-center text-xl font-medium tracking-tight">
            <img
              src="/dingpay-admin-logo.svg"
              alt="Dingpay Logo"
              className="h-8 w-auto mr-2"
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative w-[320px]">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-[#888888]" />
            </div>
            <input
              type="text"
              placeholder="Search merchants..."
              className="block w-full pl-10 pr-3 py-2 border border-[#EFEFEF] rounded-lg text-sm bg-white placeholder-[#888888] focus:outline-none focus:ring-2 focus:ring-blue-50 focus:border-blue-200 transition-all"
            />
          </div>

          <div className="h-6 w-px bg-[#EFEFEF]" />

          <div className="flex items-center gap-4">
            <button className="text-[#555555] hover:text-[#111111] transition-colors">
              <CircleHelp size={20} strokeWidth={1.5} />
            </button>
            <button className="text-[#555555] hover:text-[#111111] transition-colors relative">
              <Bell size={20} strokeWidth={1.5} />
            </button>
          </div>

          <div className="h-6 w-px bg-[#EFEFEF]" />

          <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1.5 rounded-full pr-3 transition-colors border border-transparent hover:border-[#EFEFEF]">
            <img
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              alt="User"
              className="w-8 h-8 rounded-full bg-gray-200 object-cover"
            />
            <ChevronDown size={16} className="text-[#555555]" />
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-8 pb-0">
        {/* <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => setActiveTab(link)}
              className={`
                text-[14px] font-medium px-4 py-2 rounded-full transition-all duration-200
                ${
                  activeTab === link
                    ? "bg-[#007AFF] text-white shadow-sm" // Active State (Blue pill)
                    : "text-[#555555] hover:text-[#111111] hover:bg-gray-50" // Inactive State
                }
              `}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Spacing below tabs */}
        <div className="h-4" />
      </div>
    </nav>
  );
};

export default Navbar;

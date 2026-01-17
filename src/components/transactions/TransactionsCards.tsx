import { Calendar, Info } from "lucide-react";

const TransactionsCards = () => {
  const stats = [
    {
      title: "Transaction Count",
      value: "478",
      sub: "Total transactions completed",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-[24px] font-semibold text-[#111111]">
          Transactions
        </h1>

        <div className="flex flex-row gap-3">
          <button className="h-10 px-4 border border-[#EFEFEF] rounded-full text-[#111111] text-[14px] font-medium flex items-center gap-2 hover:bg-gray-50 transition">
            <Calendar size={16} className="text-gray-500" />
            Today
          </button>
          <button className="h-10 px-4 border border-[#EFEFEF] rounded-full text-[#111111] text-[14px] font-medium flex items-center gap-2 hover:bg-gray-50 transition">
            Export data
          </button>
        </div>
      </div>

      <div className="w-full">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white max-w-[658px] rounded-lg border border-[#EFEFEF] flex flex-col overflow-hidden w-full"
          >
            <div className="bg-[#FAFAFA] flex flex-row items-center gap-2 px-4 py-3 border-b border-[#EFEFEF]">
              <Info size={16} className="text-[#555555]" />
              <h2 className="text-[13px] text-[#555555] font-medium">
                {stat.title}
              </h2>
            </div>

            <div className="px-4 py-6 flex flex-col gap-1">
              <h2 className="text-[#1D1D1D] text-[28px] font-bold tracking-tight">
                {stat.value}
              </h2>
              <p className="text-[13px] text-[#888888]">{stat.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionsCards;

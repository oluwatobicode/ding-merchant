import { Search, ChevronDown } from "lucide-react";
import { useState } from "react";
import TransactionDetailsModal, {
  type TransactionType,
} from "../../ui/TransactionDetailsModal";

const overViewTable: TransactionType[] = [
  {
    id: "TRX-98237102",
    customerName: "Tolu Andula",
    merchant: "Shoprite Ikeja",
    amount: 12000,
    status: "Completed",
    dateTime: "12 March, 2025 | 12:57 PM",
    attendedBy: "Tolu Andula",
    issuingBank: "Access Bank",
    cardNetwork: "Mastercard",
    cardNumber: "**** **** 2455",
  },
  {
    id: "TRX-88219033",
    customerName: "Jade Thompson",
    merchant: "Uber Ride",
    amount: 4500,
    status: "Completed",
    dateTime: "12 March, 2025 | 11:42 AM",
    attendedBy: "Jade Thompson",
    issuingBank: "GTBank",
    cardNetwork: "Visa",
    cardNumber: "**** **** 8832",
  },
  {
    id: "TRX-77209112",
    customerName: "Ravi Patel",
    merchant: "Eko Hotels & Suites",
    amount: 182000,
    status: "Failed",
    dateTime: "12 March, 2025 | 10:15 AM",
    attendedBy: "Ravi Patel",
    issuingBank: "Zenith Bank",
    cardNetwork: "Mastercard",
    cardNumber: "**** **** 1092",
  },
  {
    id: "TRX-66128821",
    customerName: "Sofia Martinez",
    merchant: "Netflix Subscription",
    amount: 4500,
    status: "Completed",
    dateTime: "12 March, 2025 | 09:30 AM",
    attendedBy: "Sofia Martinez",
    issuingBank: "UBA",
    cardNetwork: "Visa",
    cardNumber: "**** **** 6721",
  },
  {
    id: "TRX-55102938",
    customerName: "Carlos Gomez",
    merchant: "Jumia Nigeria",
    amount: 30000,
    status: "Pending",
    dateTime: "11 March, 2025 | 04:20 PM",
    attendedBy: "Carlos Gomez",
    issuingBank: "First Bank",
    cardNetwork: "Verve",
    cardNumber: "**** **** 5543",
  },
  {
    id: "TRX-44910233",
    customerName: "Lena Chen",
    merchant: "Filmhouse Cinemas",
    amount: 8500,
    status: "Completed",
    dateTime: "11 March, 2025 | 02:15 PM",
    attendedBy: "Lena Chen",
    issuingBank: "Kuda Bank",
    cardNetwork: "Mastercard",
    cardNumber: "**** **** 9912",
  },
  {
    id: "TRX-33829100",
    customerName: "Eli Johnson",
    merchant: "Spar Supermarket",
    amount: 40300,
    status: "Completed",
    dateTime: "11 March, 2025 | 01:05 PM",
    attendedBy: "Eli Johnson",
    issuingBank: "Fidelity Bank",
    cardNetwork: "Visa",
    cardNumber: "**** **** 2201",
  },
  {
    id: "TRX-22738211",
    customerName: "Maya Robinson",
    merchant: "Chicken Republic",
    amount: 5000,
    status: "Pending",
    dateTime: "11 March, 2025 | 12:45 PM",
    attendedBy: "Maya Robinson",
    issuingBank: "Access Bank",
    cardNetwork: "Verve",
    cardNumber: "**** **** 3349",
  },
  {
    id: "TRX-11649322",
    customerName: "Oluwaseun Adebayo",
    merchant: "MTN Airtime Topup",
    amount: 2000,
    status: "Completed",
    dateTime: "11 March, 2025 | 11:10 AM",
    attendedBy: "Oluwaseun Adebayo",
    issuingBank: "OPay",
    cardNetwork: "Mastercard",
    cardNumber: "**** **** 7721",
  },
  {
    id: "TRX-00558433",
    customerName: "Chinedu Okafor",
    merchant: "DSTV Subscription",
    amount: 14500,
    status: "Failed",
    dateTime: "11 March, 2025 | 09:00 AM",
    attendedBy: "Chinedu Okafor",
    issuingBank: "Sterling Bank",
    cardNetwork: "Visa",
    cardNumber: "**** **** 1188",
  },
];

const TransactionsTables = () => {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-[#ECFDF3] text-[#027A48] border-transparent";
      case "Failed":
        return "bg-[#FFF6ED] text-[#C4320A] border-transparent";
      case "Pending":
        return "bg-[#F2F4F7] text-[#344054] border-transparent";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const [selectedTransaction, setSelectedTransaction] =
    useState<TransactionType | null>(null);

  return (
    <div className="w-full flex flex-col gap-4">
      <TransactionDetailsModal
        isOpen={!!selectedTransaction}
        onClose={() => setSelectedTransaction(null)}
        data={selectedTransaction}
      />

      <h2 className="text-lg font-semibold text-[#111111]">All Transactions</h2>

      <div className="flex items-center justify-between w-full">
        <div className="relative w-[320px]">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={16} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="block w-full pl-10 pr-3 py-2 border border-[#EFEFEF] rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-gray-300 sm:text-sm"
          />
        </div>

        <div className="flex flex-row gap-3">
          <button className="h-9 px-3 border border-[#EFEFEF] rounded-lg text-[#111111] text-[13px] font-medium flex items-center gap-8 bg-white hover:bg-gray-50">
            <span className="text-gray-500 font-normal">
              Date Range: <span className="text-black font-medium">All</span>
            </span>
            <ChevronDown size={14} className="text-gray-500" />
          </button>

          <button className="h-9 px-3 border border-[#EFEFEF] rounded-lg text-[#111111] text-[13px] font-medium flex items-center gap-8 bg-white hover:bg-gray-50">
            <span className="text-gray-500 font-normal">
              Status: <span className="text-black font-medium">All</span>
            </span>
            <ChevronDown size={14} className="text-gray-500" />
          </button>

          <button className="h-9 px-4 border border-[#EFEFEF] rounded-lg text-[#111111] text-[13px] font-medium hover:bg-gray-50">
            Export data (CSV)
          </button>
        </div>
      </div>

      <div className="w-full bg-white border border-[#EFEFEF] rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#FAFAFA] border-b border-[#EFEFEF]">
                <th className="py-4 px-6 text-[12px] font-medium text-[#555555]">
                  ID
                </th>
                <th className="py-4 px-6 text-[12px] font-medium text-[#555555]">
                  Customer Name
                </th>
                <th className="py-4 px-6 text-[12px] font-medium text-[#555555]">
                  Merchant
                </th>
                <th className="py-4 px-6 text-[12px] font-medium text-[#555555]">
                  Amount
                </th>
                <th className="py-4 px-6 text-[12px] font-medium text-[#555555]">
                  Status
                </th>
                <th className="py-4 px-6 text-[12px] font-medium text-[#555555]">
                  Date & Time
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-[#EFEFEF]">
              {overViewTable.map((row, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition-colors cursor-pointer duration-150"
                  onClick={() => setSelectedTransaction(row)}
                >
                  <td className="py-4 px-6 text-sm text-[#1D1D1D] font-medium">
                    {row.id}
                  </td>
                  <td className="py-4 px-6 text-sm text-[#1D1D1D] font-medium">
                    {row.customerName}
                  </td>
                  <td className="py-4 px-6 text-sm text-[#1D1D1D] font-medium">
                    {row.merchant}
                  </td>
                  <td className="py-4 px-6 text-sm text-[#1D1D1D] font-medium">
                    {formatCurrency(row.amount)}
                  </td>
                  <td className="py-4 px-6 text-sm">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[#1D1D1D] text-xs font-medium border ${getStatusStyles(
                        row.status,
                      )}`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-[#1D1D1D] font-medium">
                    {row.dateTime}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between px-6 py-4 border-t border-[#EFEFEF] bg-white">
          <span className="text-sm text-[#555555]">Page 1 of 10</span>
          <div className="flex space-x-2">
            <button className="px-3 py-1.5 text-sm font-medium text-[#344054] bg-white border border-[#D0D5DD] rounded-[8px] hover:bg-gray-50 disabled:opacity-50 shadow-sm">
              Previous
            </button>
            <button className="px-3 py-1.5 text-sm font-medium text-[#344054] bg-white border border-[#D0D5DD] rounded-[8px] hover:bg-gray-50 shadow-sm">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsTables;

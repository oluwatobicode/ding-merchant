import { X, ExternalLink } from "lucide-react";
// import { useEffect } from "react";

export interface TransactionType {
  id: string;
  customerName: string;
  merchant: string;
  amount: number;
  status: "Completed" | "Pending" | "Failed";
  dateTime: string;

  attendedBy: string;
  issuingBank: string;
  cardNetwork: string;
  cardNumber: string;
}

interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: TransactionType | null;
}

const TransactionDetailsModal = ({
  isOpen,
  onClose,
  data,
}: TransactionModalProps) => {
  // useEffect(() => {
  //   const prev = document.body.style.overflow;
  //   document.body.style.overflow = "hidden";
  //   return () => {
  //     document.body.style.overflow = prev;
  //   };
  // }, []);

  if (!isOpen || !data) return null;

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-[#ECFDF3] text-[#027A48]";
      case "Failed":
        return "bg-[#FFF6ED] text-[#C4320A]";
      case "Pending":
        return "bg-[#F2F4F7] text-[#344054]";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/70 transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-[480px] overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#F0F0F0]">
          <h2 className="text-[18px] font-semibold text-[#111111]">
            Transaction Details
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={20} className="text-[#555555]" />
          </button>
        </div>

        <div className="p-6 flex flex-col gap-6">
          <div className="text-center">
            <h1 className="text-[32px] font-bold text-[#111111] tracking-tight">
              {new Intl.NumberFormat("en-NG", {
                style: "currency",
                currency: "NGN",
              }).format(data.amount)}
            </h1>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="text-[14px] text-[#555555]">Customer</span>
              <span className="text-[14px] text-[#111111] font-medium">
                {data.customerName}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[14px] text-[#555555]">Date & Time</span>
              <span className="text-[14px] text-[#111111] font-medium">
                {data.dateTime}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[14px] text-[#555555]">Attended by</span>
              <span className="text-[14px] text-[#111111] font-medium">
                {data.attendedBy}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[14px] text-[#555555]">Status</span>
              <span
                className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyles(data.status)}`}
              >
                {data.status}
              </span>
            </div>
          </div>

          <div className="h-px bg-[#F0F0F0] w-full" />

          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="text-[14px] text-[#555555]">Issuing bank</span>
              <span className="text-[14px] text-[#111111] font-medium">
                {data.issuingBank}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[14px] text-[#555555]">Network</span>
              <span className="text-[14px] text-[#111111] font-medium">
                {data.cardNetwork}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[14px] text-[#555555]">Card number</span>
              <span className="text-[14px] text-[#111111] font-medium">
                {data.cardNumber}
              </span>
            </div>
          </div>

          <div className="h-px bg-[#F0F0F0] w-full" />

          <div className="flex flex-col gap-1">
            <button className="flex items-center gap-2 text-[#D92D20] text-[14px] font-medium hover:underline w-fit">
              Report transaction
              <ExternalLink size={14} />
            </button>
            <p className="text-[12px] text-[#555555] leading-normal">
              For help with any discrepancies or feel something isn't right with
              this transaction, please report it immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetailsModal;

import TransactionsCards from "../components/transactions/TransactionsCards";
import TransactionsTables from "../components/transactions/TransactionsTables";
import Navbar from "../ui/Navbar";

const Transactions = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-[1400px] mx-auto px-8 py-8 flex flex-col gap-8">
        <TransactionsCards />
        <TransactionsTables />
      </main>
    </div>
  );
};
export default Transactions;

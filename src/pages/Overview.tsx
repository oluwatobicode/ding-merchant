import OverviewCards from "../components/overview/OverviewCards";
import OverviewTables from "../components/overview/OverviewTables";
import Navbar from "../ui/Navbar";

const Overview = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Centralized Layout Controller 
        - max-w-[1400px] matches your design intent 
        - mx-auto centers it 
        - px-8 adds breathing room on the sides
      */}
      <main className="max-w-[1400px] mx-auto px-8 py-8 flex flex-col gap-8">
        <OverviewCards />
        <OverviewTables />
      </main>
    </div>
  );
};
export default Overview;

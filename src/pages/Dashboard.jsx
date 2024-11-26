import { FaArrowRight } from "react-icons/fa";
import Card from "../component/Card";
import Transaction from "../component/Transaction";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex ">
        <div className="flex">
          <div>My Cards</div>
          <Card theme="dark" />
          <Card />
        </div>
        <div>
          {" "}
          Recent Transaction
          <Transaction />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

import { FaArrowRight } from "react-icons/fa";
import Card from "../component/Card";
import Transaction from "../component/Transaction";
import ColumnChart from "../component/charts/ColumnChart";
import AreaChart from "../component/charts/AreaChart";
import LineChart from "../component/charts/LineChart";
import PaymentForm from "../component/PaymentForm";

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
      <div>
        <ColumnChart />
        <AreaChart />
        <LineChart />
        <PaymentForm />
      </div>
    </div>
  );
}

export default Dashboard;

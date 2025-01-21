import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import classNames from "classnames";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type Store = {
  id: number;
  name: string;
  owner: string;
  email: string;
  established: string;
  stats: {
    totalProducts: number;
    monthlySales: number;
    pendingOrders: number;
    newCustomers: number;
  };
  salesData: number[];
  revenueData: number[];
};

type StatCardProps = {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  className?: string;
};

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  className,
}) => (
  <div
    className={classNames(
      "card bg-white shadow-lg rounded-lg p-4 flex items-center",
      className
    )}
  >
    <div className="text-4xl text-primary mr-4">{icon}</div>
    <div>
      <h3 className="text-sm font-semibold text-gray-600">{title}</h3>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

const stores: Store[] = [
  {
    id: 1,
    name: "TechGear Store",
    owner: "Alice Smith",
    email: "techgear@example.com",
    established: "March 2021",
    stats: {
      totalProducts: 350,
      monthlySales: 15000,
      pendingOrders: 45,
      newCustomers: 120,
    },
    salesData: [300, 500, 400, 600, 800, 700],
    revenueData: [1400, 1600, 1500, 1700],
  },
  {
    id: 2,
    name: "GadgetZone",
    owner: "Bob Johnson",
    email: "gadgetzone@example.com",
    established: "January 2020",
    stats: {
      totalProducts: 245,
      monthlySales: 10000,
      pendingOrders: 30,
      newCustomers: 90,
    },
    salesData: [200, 400, 300, 500, 600, 400],
    revenueData: [1200, 1300, 1250, 1350],
  },
];

export const ManageStorePageSecond: React.FC = () => {
  const [selectedStore, setSelectedStore] = useState<Store>(stores[0]);

  const handleStoreChange = (storeId: number) => {
    const store = stores.find((store) => store.id === storeId);
    if (store) setSelectedStore(store);
  };

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Monthly Sales",
        data: selectedStore.salesData,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const lineData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Weekly Revenue",
        data: selectedStore.revenueData,
        borderColor: "#4BC0C0",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="container mx-auto p-4 lg:p-8">
      {/* Store Selector */}
      <div className="mb-6">
        <label className="text-gray-700 font-bold block mb-2">
          Select Store
        </label>
        <select
          className="select select-bordered w-full max-w-xs"
          value={selectedStore.id}
          onChange={(e) => handleStoreChange(Number(e.target.value))}
        >
          {stores.map((store) => (
            <option key={store.id} value={store.id}>
              {store.name}
            </option>
          ))}
        </select>
      </div>

      {/* Store Information */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          {selectedStore.name} Information
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="text-gray-700 font-bold">Owner</h4>
            <p className="text-gray-600">{selectedStore.owner}</p>
          </div>
          <div>
            <h4 className="text-gray-700 font-bold">Contact Email</h4>
            <p className="text-gray-600">{selectedStore.email}</p>
          </div>
          <div>
            <h4 className="text-gray-700 font-bold">Established</h4>
            <p className="text-gray-600">{selectedStore.established}</p>
          </div>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Products"
          value={selectedStore.stats.totalProducts}
          icon={<i className="fas fa-box"></i>}
        />
        <StatCard
          title="Monthly Sales"
          value={`$${selectedStore.stats.monthlySales}`}
          icon={<i className="fas fa-chart-line"></i>}
        />
        <StatCard
          title="Pending Orders"
          value={selectedStore.stats.pendingOrders}
          icon={<i className="fas fa-clock"></i>}
        />
        <StatCard
          title="New Customers"
          value={selectedStore.stats.newCustomers}
          icon={<i className="fas fa-users"></i>}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Monthly Sales Performance
          </h3>
          <Bar data={barData} options={{ responsive: true }} />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Weekly Revenue Trends
          </h3>
          <Line data={lineData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

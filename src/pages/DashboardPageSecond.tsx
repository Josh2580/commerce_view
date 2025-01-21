import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";
import classNames from "classnames";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

// Reusable Components
type CardProps = {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  className?: string;
};

const StatCard: React.FC<CardProps> = ({ title, value, icon, className }) => (
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

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
    <h3 className="text-lg font-semibold text-gray-700 mb-4">{title}</h3>
    {children}
  </div>
);

// Dashboard Page
export const DashboardPageSecond: React.FC = () => {
  // Dummy Data for Charts
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [120, 190, 300, 500, 200, 300],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  const pieData = {
    labels: ["Electronics", "Fashion", "Home", "Beauty", "Toys"],
    datasets: [
      {
        label: "Categories",
        data: [300, 500, 100, 200, 150],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  const lineData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Revenue",
        data: [400, 600, 800, 700],
        borderColor: "#4BC0C0",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  return (
    <div className="container mx-auto p-4 lg:p-8">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Sales"
          value="$12,340"
          icon={<i className="fas fa-shopping-cart"></i>}
        />
        <StatCard
          title="Total Products"
          value="1,245"
          icon={<i className="fas fa-box"></i>}
          className="bg-blue-50"
        />
        <StatCard
          title="New Users"
          value="345"
          icon={<i className="fas fa-users"></i>}
          className="bg-green-50"
        />
        <StatCard
          title="Pending Orders"
          value="87"
          icon={<i className="fas fa-clock"></i>}
          className="bg-yellow-50"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Chart */}
        <Section title="Monthly Sales">
          <Bar data={barData} options={{ responsive: true }} />
        </Section>

        {/* Revenue Chart */}
        <Section title="Weekly Revenue">
          <Line data={lineData} options={{ responsive: true }} />
        </Section>

        {/* Category Distribution */}
        <Section title="Category Distribution">
          <Pie data={pieData} options={{ responsive: true }} />
        </Section>
      </div>
    </div>
  );
};

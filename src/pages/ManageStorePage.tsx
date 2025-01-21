import React from "react";
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

export const ManageStorePage: React.FC = () => {
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Monthly Sales",
        data: [500, 800, 400, 600, 700, 900],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const lineData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Weekly Revenue",
        data: [1200, 1500, 1300, 1400],
        borderColor: "#4BC0C0",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="container mx-auto p-4 lg:p-8">
      {/* Store Information Section */}
      <Section title="Store Information">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="text-gray-700 font-bold">Store Name</h4>
            <p className="text-gray-600">My Awesome Store</p>
          </div>
          <div>
            <h4 className="text-gray-700 font-bold">Owner</h4>
            <p className="text-gray-600">John Doe</p>
          </div>
          <div>
            <h4 className="text-gray-700 font-bold">Contact Email</h4>
            <p className="text-gray-600">store@example.com</p>
          </div>
          <div>
            <h4 className="text-gray-700 font-bold">Established</h4>
            <p className="text-gray-600">January 2020</p>
          </div>
        </div>
      </Section>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Products"
          value="1,245"
          icon={<i className="fas fa-box"></i>}
        />
        <StatCard
          title="Monthly Sales"
          value="$12,340"
          icon={<i className="fas fa-chart-line"></i>}
          className="bg-blue-50"
        />
        <StatCard
          title="Pending Orders"
          value="87"
          icon={<i className="fas fa-clock"></i>}
          className="bg-yellow-50"
        />
        <StatCard
          title="New Customers"
          value="345"
          icon={<i className="fas fa-users"></i>}
          className="bg-green-50"
        />
      </div>

      {/* Store Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Section title="Monthly Sales Performance">
          <Bar data={barData} options={{ responsive: true }} />
        </Section>

        <Section title="Weekly Revenue Trends">
          <Line data={lineData} options={{ responsive: true }} />
        </Section>
      </div>
    </div>
  );
};

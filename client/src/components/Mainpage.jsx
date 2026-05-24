import "../style/Mainpage.css";
import { LuUsers } from "react-icons/lu";
import { FaBuilding } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";

const stacks = [
  {
    title: "Total Contacts",
    icon: <LuUsers />,
    value: "1,234",
    percentage: "+12% from last month",
  },
  {
    title: "Companies",
    icon: <FaBuilding />,
    value: "456",
    percentage: "+8% from last month",
  },
  {
    title: "Active Deals",
    icon: <FaArrowTrendUp />,
    value: "89",
    percentage: "+23% from last month",
  },
  {
    title: "Revenue",
    icon: <BsCurrencyDollar />,
    value: "$234,567",
    percentage: "+18% from last month",
  },
];

const Mainpage = () => {
  return (
    <div className="main-page">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Dashboard</h1>
          <p className="dashboard-description">
            Welcome to your new CRM dashboard
          </p>
        </div>
      </div>

      {/* Top Cards */}
      <div className="stats-cards">
        {stacks.map((stack) => (
          <div className="card" key={stack.title}>
            <div className="card-top">
              <span className="card-title">{stack.title}</span>
              <div className="card-icon">{stack.icon}</div>
            </div>
            <div className="card-value">{stack.value}</div>
            <div className="card-percentage">{stack.percentage}</div>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="trend-chart-card">
        <h2 className="revenue-trend-title">Revenue Trend</h2>
        <div className="trend-chart-wrapper">
          <div className="chart-labels">
            <span>$250k</span>
            <span>$200k</span>
            <span>$150k</span>
            <span>$100k</span>
            <span>$50k</span>
            <span>$0k</span>
          </div>

          <div className="chart-right-block">
            <div className="trend-chart">
              <div className="chart-grid" />

              <svg
                className="chart-svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="chartGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#16a34a" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#16a34a" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                <path
                  d="M 0 46 Q 20 42 40 43 T 80 30 T 100 26 L 100 100 L 0 100 Z"
                  fill="url(#chartGradient)"
                />

                <path
                  d="M 0 46 Q 20 42 40 43 T 80 30 T 100 26 "
                  fill="none"
                  stroke="#16a34a"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>

              <div className="chart-point point-1" />
              <div className="chart-point point-2" />
              <div className="chart-point point-3" />
              <div className="chart-point point-4" />
              <div className="chart-point point-5" />
              <div className="chart-point point-6" />
            </div>

            <div className="chart-axis">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-bottom-grid">
        <div className="bottom-panel recent-activity-panel">
          <h3>Recent Activity</h3>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-indicator status-green" />
              <div className="activity-content">
                <span className="activity-title">New contact added</span>
                <span className="activity-sub">John Doe from Acme Corp</span>
                <span className="activity-time">2 hours ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-indicator status-green" />
              <div className="activity-content">
                <span className="activity-title">Deal closed</span>
                <span className="activity-sub">
                  $45,000 deal with Tech Solutions
                </span>
                <span className="activity-time">5 hours ago</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-panel upcoming-tasks-panel">
          <h3>Upcoming Tasks</h3>
          <div className="tasks-list">
            <div className="task-item">
              <input type="checkbox" id="task1" className="task-checkbox" />
              <label htmlFor="task1" className="task-content">
                <span className="task-title">Call with prospect</span>
                <span className="task-time">Today at 2:00 PM</span>
              </label>
            </div>
            <div className="task-item">
              <input type="checkbox" id="task2" className="task-checkbox" />
              <label htmlFor="task2" className="task-content">
                <span className="task-title">Send proposal</span>
                <span className="task-time">Tomorrow at 10:00 AM</span>
              </label>
            </div>
            <div className="task-item">
              <input type="checkbox" id="task3" className="task-checkbox" />
              <label htmlFor="task3" className="task-content">
                <span className="task-title">Review contracts</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;

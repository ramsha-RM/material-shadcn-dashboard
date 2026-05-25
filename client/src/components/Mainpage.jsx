import { useState } from "react";
import "../style/Mainpage.css";
import { LuUsers } from "react-icons/lu";
import { FaBuilding } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";

const Mainpage = () => {
  const [revenueData] = useState([50, 80, 65, 180, 140, 220]);

  const chartWidth = 1000;
  const chartHeight = 300;
  const maxDataValue = 250;

  const points = revenueData.map((val, index) => {
    const x = (index / (revenueData.length - 1)) * chartWidth;
    const y = chartHeight - (val / maxDataValue) * chartHeight;
    return { x, y, value: val };
  });

  let pathString = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];
    const cpX1 = p0.x + (p1.x - p0.x) / 2;
    const cpY1 = p0.y;
    const cpX2 = p0.x + (p1.x - p0.x) / 2;
    const cpY2 = p1.y;
    pathString += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${p1.x} ${p1.y}`;
  }

  const areaString = `${pathString} L ${chartWidth} ${chartHeight} L 0 ${chartHeight} Z`;

  return (
    <div className="main-page">
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Dashboard</h1>
          <p className="dashboard-description">
            Welcome to your new CRM dashboard
          </p>
        </div>
      </div>

      <div className="stats-cards">
        <div className="card">
          <div className="card-top">
            <span className="card-title">Total Contacts</span>
            <div className="card-icon">
              <LuUsers />
            </div>
          </div>
          <div className="card-value">1,234</div>
          <div className="card-percentage">+12% from last month</div>
        </div>
        <div className="card">
          <div className="card-top">
            <span className="card-title">Companies</span>
            <div className="card-icon">
              <FaBuilding />
            </div>
          </div>
          <div className="card-value">456</div>
          <div className="card-percentage">+8% from last month</div>
        </div>
        <div className="card">
          <div className="card-top">
            <span className="card-title">Active Deals</span>
            <div className="card-icon">
              <FaArrowTrendUp />
            </div>
          </div>
          <div className="card-value">89</div>
          <div className="card-percentage">+23% from last month</div>
        </div>
        <div className="card">
          <div className="card-top">
            <span className="card-title">Revenue (Current Month)</span>
            <div className="card-icon">
              <BsCurrencyDollar />
            </div>
          </div>
          <div className="card-value">${revenueData[5]}k</div>
          <div className="card-percentage">+18% from last month</div>
        </div>
      </div>

      <div className="trend-chart-card">
        <h2 className="revenue-trend-title">Revenue Trend (Live Sync)</h2>
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
                viewBox="0 0 1000 300"
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
                    <stop offset="0%" stopColor="#16a34a" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#16a34a" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                <path
                  d={areaString}
                  fill="url(#chartGradient)"
                  className="smooth-transition"
                />
                <path
                  d={pathString}
                  fill="none"
                  stroke="#16a34a"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="smooth-transition"
                />

                {points.map((pt, i) => (
                  <circle
                    key={i}
                    cx={pt.x}
                    cy={pt.y}
                    r="6"
                    className="native-svg-dot smooth-transition"
                  >
                    <title>{`$${pt.value}k`}</title>
                  </circle>
                ))}
              </svg>
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

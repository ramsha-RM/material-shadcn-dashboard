import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Mainpage from "./components/Mainpage";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Companies from "./components/Companydata";

// import Deals from "./components/Deals";
// import Tasks from "./components/Tasks";
// import Reports from "./components/Reports";
// import Billing from "./components/Billing";
// import Settings from "./components/Settings";
// import Docs from "./components/Docs";

const CompaniesPage = () => <div className="dynamic-view-wrapper"><h2>Companies Directory UI</h2></div>;
const DealsPage = () => <div className="dynamic-view-wrapper"><h2>Deals Overview UI</h2></div>;
const TasksPage = () => <div className="dynamic-view-wrapper"><h2>Tasks Panel UI</h2></div>;
const ReportsPage = () => <div className="dynamic-view-wrapper"><h2>Reports Analytics UI</h2></div>;
const BillingPage = () => <div className="dynamic-view-wrapper"><h2>Billing Section UI</h2></div>;
const SettingsPage = () => <div className="dynamic-view-wrapper"><h2>Settings Engine UI</h2></div>;
const DocsPage = () => <div className="dynamic-view-wrapper"><h2>Documents Space UI</h2></div>;

const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth <= 768);

  return (
    <div className="app">

      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      <div className={`main ${isCollapsed ? "collapsed-layout" : "expanded-layout"}`}>

        <Navbar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        

        <div className="content-container">
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/contact" element={<Contacts />} />
            
            <Route path="/companies" element={<Companies />} />
            <Route path="/deals" element={<DealsPage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/billing" element={<BillingPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/docs" element={<DocsPage />} />

            <Route path="*" element={<Mainpage />} />
          </Routes>
        </div>

        {/* Global sticky layout footer anchor */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
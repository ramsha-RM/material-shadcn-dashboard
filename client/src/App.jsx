import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Mainpage from "./components/Mainpage";
import Footer from "./components/Footer";


const ContactsPage = () => <div style={{ padding: "20px" }}><h2>Contacts Panel</h2></div>;
const CompaniesPage = () => <div style={{ padding: "20px" }}><h2>Companies Directory</h2></div>;
const DealsPage = () => <div style={{ padding: "20px" }}><h2>Deals Overview</h2></div>;
const TasksPage = () => <div style={{ padding: "20px" }}><h2>Tasks</h2></div>;
const ReportsPage = () => <div style={{ padding: "20px" }}><h2>Reports</h2></div>;
const BillingPage = () => <div style={{ padding: "20px" }}><h2>Billing</h2></div>;
const SettingsPage = () => <div style={{ padding: "20px" }}><h2>Settings</h2></div>;
const DocsPage = () => <div style={{ padding: "20px" }}><h2>Documents</h2></div>;

const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth <= 768);
  const openSidebar = () => setIsCollapsed(false);

  return (
    <div className="app">

      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

   
      <div className={`main ${isCollapsed ? "collapsed-layout" : "expanded-layout"}`}>
        <Navbar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        
        <div className="content-container">
          <Routes>

            <Route path="/" element={<Mainpage />} />
          
            <Route path="/contact" element={<ContactsPage />} />
            <Route path="/companies" element={<CompaniesPage />} />
            <Route path="/deals" element={<DealsPage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/billing" element={<BillingPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/docs" element={<DocsPage />} />

            <Route path="*" element={<Mainpage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;
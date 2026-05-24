import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Mainpage from "./components/Mainpage";
import Footer from "./components/Footer";


const ContactsPage = () => <div style={{ padding: "20px" }}><h2>Contacts Panel</h2></div>;
const CompaniesPage = () => <div style={{ padding: "20px" }}><h2>Companies Directory</h2></div>;

const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(true); 

  return (
    <div className="app">

      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

   
      <div className={`main ${isCollapsed ? "collapsed-layout" : "expanded-layout"}`}>
        <Navbar />
        
        <div className="content-container">
          <Routes>

            <Route path="/" element={<Mainpage />} />
          
            <Route path="/contact" element={<ContactsPage />} />
            <Route path="/companies" element={<CompaniesPage />} />
            
            <Route path="*" element={<Mainpage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;
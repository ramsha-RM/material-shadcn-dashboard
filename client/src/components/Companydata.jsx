import React from "react";
import "../style/Company.css";
import { IoIosSearch } from "react-icons/io";
import { LuUsers } from "react-icons/lu";
import { FaBuilding } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";

const companyData = [
  {
    id: 1,
    name: "Acme Corporation",
    industry: "Technology",
    contacts: 12,
    revenue: "$125,000"
  },
  {
    id: 2,
    name: "Tech Solutions Inc",
    industry: "Software Development",
    contacts: 8,
    revenue: "$89,500"
  },
  {
    id: 3,
    name: "InnovateCo",
    industry: "Consulting",
    contacts: 15,
    revenue: "$210,000"
  },
];

const Company = () => {
  return (
    <div className="companies-page">
      
      <div className="companies-header">
        <div>
          <h2 className="companies-title">Companies</h2>
          <p className="companies-description">Manage your company relationships</p>
        </div>
        <button className="add-company-btn">+ Add Company</button>
      </div>
      

      <div className="search-bar">
        <IoIosSearch className="search-icon" />
        <input type="text" className="search-input" placeholder="Search companies..." />
      </div>
   
      <div className="companies-list">
        {companyData.map((company) => (
          <div className="company-card" key={company.id}>
            
  
            <div className="company-icon-box">
              <FaBuilding className="building-icon" />
            </div>

            <div className="company-details-container">
              <div className="company-meta-header">
                <h3>{company.name}</h3>
                <p className="industry-sub">{company.industry}</p>
              </div>

              <div className="metric-row">
                <div className="metric-label">
                  <LuUsers className="metric-icon" />
                  <span>Contacts</span>
                </div>
                <span className="metric-val">{company.contacts}</span>
              </div>

              <div className="metric-row">
                <div className="metric-label">
                  <BsCurrencyDollar className="metric-icon" />
                  <span>Revenue</span>
                </div>
                <span className="metric-val val-bold">{company.revenue}</span>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Company;
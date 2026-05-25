import React from "react";
import "../style/Contact.css";
import { IoIosSearch } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";

const contactsData = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO at Acme Corp",
    email: "john@acme.com",
    contactNumber: "+1 234 567 8900",
    initials: "JD"
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "CTO at Tech Solutions",
    email: "jane@techsol.com",
    contactNumber: "+1 234 567 8901",
    initials: "JS"
  },
  {
    id: 3,
    name: "Mike Brown",
    title: "Sales Director at InnovateCo",
    email: "mike@innovate.com",
    contactNumber: "+1 234 567 8902",
    initials: "MB"
  },
];

const Contacts = () => {
  return (
    <div className="contacts-page">
      <div className="contacts-header">
        <div>
          <h2 className="contacts-title">Contacts</h2>
          <p className="contacts-description">Manage your contact relationships</p>
        </div>
        <button className="add-contact-btn">+ Add Contact</button>
      </div>
      
      <div className="search-bar">
        <IoIosSearch className="search-icon" />
        <input type="text" className="search-input" placeholder="Search contacts..." />
      </div>
      
      <div className="contacts-list">
        {contactsData.map((contact) => (
          <div className="contact-card" key={contact.id}>
            <div className="profile-cir">{contact.initials}</div>
            <div className="card-details">
              <h3>{contact.name}</h3>
              <p className="card-title-sub">{contact.title}</p>
              
              <div className="contact-info-row" style={{ marginTop: "8px" }}>
                <CiMail className="contact-icon" /> <span>{contact.email}</span>
              </div>
              <div className="contact-info-row">
                <MdOutlinePhone className="contact-icon" /> <span>{contact.contactNumber}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
// src/ContactList.js
import React from 'react';

const Contact = () => {
  const contacts = [
    { name: 'Arabaj Inamdar', phone: '7066870065', email: 'Arabaj@example.com' },
    { name: 'Prathmesh Patil', phone: '7575414578', email: 'Patya@example.com' },
    { name: 'Prajwal More', phone: '8800252524', email: 'Pajya@example.com' },
    { name: 'Sharad Patil', phone: '8877445321', email: 'Appa@example.com' },
  ];

  return (
    <div className="contact-list-container">
      <h1>Contact List</h1>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index} className="contact-item">
            <h2>{contact.name}</h2>
            <p>Phone: {contact.phone}</p>
            <p>Email: {contact.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;

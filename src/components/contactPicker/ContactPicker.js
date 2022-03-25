import React from "react";

export const ContactPicker = ({ contacts, onChange }) => {

  return (
    <select onChange={onChange} >
      <option key={0} value="default">Select a contact</option>
      {contacts.map((contact, index) => (
        <option key={index+1} value={contact.name}>{contact.name}</option>
      ))}
    </select>
  );
};

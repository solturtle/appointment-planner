import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker.js';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleDateChange = (e) => {
    setDate(e.target.value);
  }

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  }

  const handleContactChange = (e) => {
    setContact(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" required onChange={handleTitleChange} value={title} /><br /><br />
      <input type="date" placeholder="Date" required onChange={handleDateChange} value={date} min={getTodayString()} /><br /><br />
      <input type="time" placeholder="Time" required onChange={handleTimeChange} value={time} /><br /><br />
      <ContactPicker onChange={handleContactChange} contacts={contacts} value={contact} />
      <input type="submit" value="Submit" />
    </form>
  );
};

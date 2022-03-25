import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" required onChange={handleNameChange} value={name} /><br /><br />
      <input type="text" placeholder="Phone Number" required onChange={handlePhoneChange} value={phone} pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" /><br /><br />
      <input type="text" placeholder="Email" required onChange={handleEmailChange} value={email} /><br />
      <input type="submit" value="Submit" />
    </form>
  );
};

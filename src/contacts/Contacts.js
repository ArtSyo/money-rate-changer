import React from "react";
import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="contact-page">
      <h2>Вы всегда можете связаться с нами:</h2>
      <ul>
          <li>Эл. почта: example@mail.com</li>
          <li>Телефон: +799988877665</li>
          <li>Vk: vk.com/--example--</li>
      </ul>
    </div>
  );
};

export default Contacts;

import React from "react";
import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="contact-page">
      <h3>Вы всегда можете связаться с нами:</h3>
      <ul>
          <li>Эл. почта: example@mail.com</li>
          <li>Телефон: +799988877665</li>
          <li>Vk: vk.com/--example--</li>
      </ul>
    </div>
  );
};

export default Contacts;

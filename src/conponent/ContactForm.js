import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();
  const addContact = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_CONTACT",
      payload: { name, phoneNumber },
    });
  };
  return (
    <div>
      <form
        onSubmit={addContact}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label for="name">name</label>
        <input
          style={{
            height: "45px",
            padding: "10px",
            boxSizing: "borderBox",
            border: "1px solid #aaa",
            borderRadius: "8px",
            margin: "10px",
          }}
          id="name"
          type="name"
          placeholder="이름"
          onChange={(e) => setName(e.target.value)}
        />
        <label for="tel">전화번호</label>
        <input
          style={{
            height: "45px",
            padding: "10px",
            boxSizing: "borderBox",
            border: "1px solid #aaa",
            borderRadius: "8px",
            margin: "10px",
          }}
          id="tel"
          type="tel"
          placeholder="010-XXXX-XXXX"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button type="submit">추가</button>
      </form>
    </div>
  );
};

export default ContactForm;

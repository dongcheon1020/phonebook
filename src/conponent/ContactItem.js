import React from "react";
// import {}

const ContactItem = ({ item }) => {
  return (
    <div style={{ display: "flex" }}>
      <img
        width={50}
        src="https://i.scdn.co/image/ab67616d0000b2730bfaf7a84cd611657ce79392"
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>{item.name}</div>
        <div>{item.phoneNumber}</div>
      </div>
    </div>
  );
};

export default ContactItem;

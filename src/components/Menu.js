import React, { useState } from "react";

const Menu = ({ title, content }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="menu">
      <div className="menu-header ">
        <p>{title}</p>
        <button onClick={() => setOpen(!open)}>
          {!open && <img src="/images/button.svg" alt="fléche" />}
          {open && (
            <img
              src="/images/button.svg"
              alt="fléche"
              style={{ rotate: "180deg" }}
            />
          )}
        </button>
      </div>
      {open && (
        <div className="dropdown-menu ">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Menu;

import React, { useState } from "react";

const Menu2 = ({ title, content }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="menu">
      <div className="menu-header">
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
          <ul style={{ listStyle: "none" }}>
            {content.map((i) => {
              return <li key={[i]}>{i}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu2;

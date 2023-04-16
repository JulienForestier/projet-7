import React from "react";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <Header />
      <section className="error">
        <h2>404</h2>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <NavLink className="back-home" to={"/"}>
          Retourner sur la page d’accueil
        </NavLink>
      </section>
    </div>
  );
};

export default Error;

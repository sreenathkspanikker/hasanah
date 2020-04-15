import React from "react";
import Logo from "../assets/images/logo.png";

const Pageloader = () => {
  return (
    <div className="page-loader">
      <article>
        <img className="infinite animated bounceIn" src={Logo} alt="" />
        <h3>HASANAH</h3>
      </article>
    </div>
  );
};

export default Pageloader;

import React from "react";

const Success = ({ description }) => {
  return (
    <div className="alert--container alert--success">
      <div>
        <img
          src={require("../images/success.png")}
          alt="success icon"
          className="alert--icon"
        />
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Success;

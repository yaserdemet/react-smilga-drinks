import React from "react";
import nodata from "../assets/no-data.png";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <section style={{ display: "flex", justifyContent: "center" , alignItems : "center" ,  flexDirection : "column" }}>
      <img src={nodata} alt="" style={{ width: "400px" }} />
      <button className="btn btn-primary" style={{ marginTop: "3rem" }}  onClick={() => navigate(-1)}>Go Back</button>
    </section>
  );
};

export default Error;

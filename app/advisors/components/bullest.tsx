import React from "react";

function Bullets() {
  return (
    <div style={{ width: 17.19, height: 145, position: "relative" }}>
      <div
        style={{
          width: 145,
          height: 1,
          left: 8,
          top: 145,
          position: "absolute",
          transform: "rotate(-90deg)",
          transformOrigin: "0 0",
          border: "1.25px rgba(158, 81, 63, 0.25) dotted",
        }}
      ></div>
      <div
        style={{
          width: 17.19,
          height: 17.92,
          left: 0,
          top: 0,
          position: "absolute",
          background: "#9E513F",
          border: "3.86px #FBF1D4 solid",
          borderRadius: "50%",
        }}
      ></div>
      <div
        style={{
          width: 17.19,
          height: 17.92,
          left: 0,
          top: 65,
          position: "absolute",
          background: "#9E513F",
          border: "3.86px #FBF1D4 solid",
          borderRadius: "50%",
        }}
      ></div>
      <div
        style={{
          width: 17.19,
          height: 17.92,
          left: 0,
          top: 130,
          position: "absolute",
          background: "#9E513F",
          border: "3.86px #FBF1D4 solid",
          borderRadius: "50%",
        }}
      ></div>
    </div>
  );
}

export default Bullets;

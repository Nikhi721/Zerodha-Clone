import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row  p-3 mt-5 ">
        <h1 className=" text-center">People</h1>
      </div>
      <div
        className="row p-3 mt-5  text-muted "
        style={{ lineHeight: "1.8", fontsize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/mypic.jpg"
            alt="owner"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-4">Nikhil Kumar</h4>
          <h6 className="">Founder, CEO</h6>
        </div>
        <div className="col-6 p-3 fs-5">
          <p>
            "I am a passionate full-stack developer with a strong interest in
            building dynamic and user-friendly web applications. For my project,
            I created a Zerodha clone website, incorporating features like user
            authentication, real-time stock updates, and portfolio management.
            This project showcases my skills in React, Node.js, Express,
            MongoDB, and responsive design, highlighting my ability to deliver
            end-to-end solutions."
          </p>
          <p>
            He is a student of Moradabad Institute of Technology (MIT)  Affialiated by AKTU.
            This clone make 29-01-2025.
          </p>
          <p>
            Connect on <a href="/" style={{ textDecoration: "none" }}> Homepage/
            </a>
            <a href="/" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>
            /
            <a href="/" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;

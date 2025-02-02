import React from "react";
function Universe() {
  return (
    <div className="container mt-5 p-5">
      <div className="row text-muted text-center ">
        <h1 style={{ fontSize: "2.5rem" }}>The Zerodha Universe</h1>
        <p className="fs-4">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-5">
          <img src="media/images/zerodhaFundhouse.png"height={"60px"}alt="" />
          <p className="p-5 text-small text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
          <img src="media/images/streakLogo.png" height={"60px"}alt="" />
          <p className="text-small text-muted p-5">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/sensibullLogo.svg" height={"60px"} alt="" />
          <p className="p-5 text-small text-muted">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
          <img src="media/images/smallcaseLogo.png" height={"60px"}alt="" />
          <p className="text-small text-muted p-5">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/tijori.svg" height={"60px"}alt="" />
          <p className="p-5 text-small text-muted ">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
          <img src="media/images/dittoLogo.png" height={"85px"}alt="" />
          <p className="text-small text-muted p-5">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;

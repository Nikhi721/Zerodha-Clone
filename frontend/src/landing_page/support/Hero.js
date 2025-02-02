import React from "react";
function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h2>Support Portal</h2>
        <a href="/" className="fs-4">
          Track Tickets
        </a>
        
      </div>
      <div className="row mx-5" >
      
        <div className="col-6 p-5 ">
           <h2 className="mb-5">Search for an answer or browse help topics to create a ticket</h2>
           <input placeholder="Eg. an answer or browse help topics to create a ticket" className="mb-3"/><br/>
           <a href="/"className="fs-4 ">Track account opening</a> &nbsp;
           <a href="/"className="fs-4 "> Track segment activation</a>&nbsp;
           <a href="/"className="fs-4 ">Intraday margins</a>&nbsp;
           <a href="/"className="fs-4 ">Kite user manual</a>
        </div>
        <div className="col-6 ">
          <h2>
            Featured

          </h2>
          <ol className="fs-4 m-3">
            <li><a href="/"className="">Rights Entitlements listing in January 2025</a></li><br/>
            <li><a href="/">Surveillance measure on scrips - January 2025</a></li>
          </ol>
          
          
          
          
          </div>
      </div>
    </section>
  );
}

export default Hero;

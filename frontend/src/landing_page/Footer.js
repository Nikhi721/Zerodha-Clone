import React from "react";
function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(240,240,240)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col-3">
            <img
              src="media/images/logo.svg"
              style={{ width: "50%" }}
              alt="logo"
            />
            <p>
              &copy; 2010 - 2025, Zerodha
              <br /> Broking Ltd.
              <br />
              All rights reserved.
            </p>
            <p className="fs-4">
              <a href="/"style={{ textDecoration: "none" }}>
                
                <i  class="fa-brands fa-x-twitter "style={{color:"gray"}}>  </i>
              </a>
              <a href="/"style={{ textDecoration: "none" }}>
                <i class="fa-brands fa-square-facebook p-3 " style={{color:"gray"}}></i>
              </a>
              <a href="/"style={{ textDecoration: "none" }}>
                
                <i class="fa-brands fa-instagram fs-3 p-3"style={{color:"gray"}}></i>
              </a>
              <a href="/"style={{ textDecoration: "none" }}>
                <i class="fa-brands fa-linkedin-in " style={{color:"gray"}}></i>
              </a>
            </p>
            <p className="fs-4 ">
              <a href="/"style={{ textDecoration: "none" }}>
                
                <i class="fa-brands fa-youtube "style={{color:"gray"}}></i>
              </a>
              <a href="/"style={{ textDecoration: "none" }}>
                
                <i class="fa-brands fa-whatsapp p-3"style={{color:"gray"}}></i>
              </a>
              <a href="/"style={{ textDecoration: "none" }}>
                <i class="fa-brands fa-telegram"style={{color:"gray"}}></i>
              </a>
            </p>
          </div>
          <div className="col-3">
            <p>Company </p>
            <a href="/" style={{ textDecoration: "none" }}>
              About
            </a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>
              Products
            </a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>
              Pricing
            </a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>
              {" "}
              Referral programme
            </a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>
              Careers
            </a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>
              Zerodha.tech
            </a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>
              Open source
            </a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>
              Press & media
            </a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>
              {" "}
              Zerodha Cares (CSR)
            </a>
          </div>
          <div className="col-3">
            <p>Support </p>
            <a href="/" style={{ textDecoration: "none" }}>
              Contact us
            </a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>
              Support portal{" "}
            </a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>
              Z-Connect blog
            </a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>
              List of charges
            </a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>
              Downloads & resources
            </a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>
              Videos
            </a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>
              Market overview
            </a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>
              How to file a complaint?
            </a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>
              Status of your complaints
            </a>
          </div>
          <div className="col-3">
            <p>Account </p>
            <a href="/" style={{ textDecoration: "none" }}>
              Open an account
            </a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>
              {" "}
              Fund transfer{" "}
            </a>
          </div>
        </div>
        <div className="mt-5  text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSF & MCX - SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. - SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            - SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              complaints@zerodha.com
            </a>
            , for DP related to{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              dp@zerodha.com
            </a>
            , Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              SEBI
            </a>{" "}
            SCORES: Register on SCORES portal. Mandatory details for filing
            complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID.
            Benefits: Effective Communication, Speedy redressal of the
            grievances
          </p>
          <p>
            <a href="/" style={{ textDecoration: "none" }}>
              Smart Online Dispute Resolution
            </a>{" "}
            |
            <a href="/" style={{ textDecoration: "none" }}>
              Grievances Redressal{" "}
            </a>
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              create a ticket here.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

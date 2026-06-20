import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src="media/images/education.svg" />
        </div>
        <div className="col-6">
          <h1 className="mb-3 fs-2"> Free amd open market education</h1>{" "}
          <p>
            {" "}
            Varsity, the largest online stock market education book in the world
            covering erything from the basics to advanced trading.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Varsity{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}
          </a>
          <p className="mt-5">
            trading Q&A, the most active trading and invertment community in
            India for all your market realted
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;

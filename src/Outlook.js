import React from "react";

export default function Outlook(props) {
  return (
    <div className="Forecast">
      <div className="row outlook"></div>
        <div className="col-3">
          <div className="card">
            <div>
             <h5 className="title3">Wednesday</h5>
                <div className="card-body3">
                  <i className="fas fa-sun dayone"></i>
                     <p className="card-text3">
                        <strong>62°</strong>
                    </p>
                </div>
            </div>
          </div>
      </div>
    </div>
  );
}




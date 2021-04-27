import React from "react";

export default function Outlook(props) {
  return (
    <div className="Forecast">
      <div className="row outlook"></div>
        <div className="col-3">
          <div className="card">
            <div>
             <h5 className="title3">{props.day}</h5>
                <div className="card-body3">
                  <i className="fas fa-sun dayone"></i>
                     <p className="card-text3">
                        <strong>{props.maxTemp}</strong> / <em>{props.minTemp}</em>
                    </p>
                </div>
            </div>
          </div>
      </div>
    </div>
  );
}




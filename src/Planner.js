import React from "react";

export default function Planner() {
  return (
    <div className="Planner">
      <div className="row">
        <div className="col-3">
          <div className="card">
            <h5 className="title2">{props.value}</h5>
              <div className="card-body2">
                <i className="fas fa-cloud centre-wx"></i>
                  <p className="card-text">{props.temp}°</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );

}
import React from "react";

const Find = () => {
  return (
    <div className="find">
      <div>
        <h4>Find your place</h4>
        <div className="form-item">
          <span
            className="material-icons form-icon"
            style={{ marginTop: "8px" }}
          >
            search
          </span>
          <button className="srch-btn">Search</button>
          <input type="search" />
        </div>
      </div>
    </div>
  );
};

export default Find;

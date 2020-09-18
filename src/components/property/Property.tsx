import React, { FC } from "react";
import { Link } from "react-router-dom";
import PropertyModel from "../../models/PropertyModel";

interface IProps {
  property: PropertyModel;
}

const Property: FC<IProps> = ({ property }) => {
  const {
    title,
    location,
    description,
    image,
    price,
    _id,
    bathrooms,
    bedrooms,
  } = property;

  return (
    <div className="property">
      <div>
        <div
          className="image"
          style={{
            background: `url(/api/files/${image})`,
          }}
        >
          <div style={{ padding: `8px` }}>
            <span>
              <span className="material-icons">bookmark</span>
            </span>
          </div>
        </div>
      </div>
      <div className="pdetails">
        <div
          style={{
            fontSize: `20px`,
          }}
        >
          <Link to={`/property/${_id}`}> {title}</Link>
        </div>
        <div
          style={{
            fontSize: `14px`,
            fontWeight: 300,
            textAlign: "justify",
          }}
        >
          {description
            ? `${description?.substr(0, 100)}...`
            : "Property description"}
        </div>
        <div style={{ display: "flex" }}>
          <span style={{ display: "flex" }}>
            <span>{bedrooms}</span>
            <div className="material-icons">hotel</div>
          </span>
          <span style={{ display: "flex", marginLeft: "16px" }}>
            <span>{bathrooms}</span>
            <div className="material-icons">bathtub</div>
          </span>
        </div>
        <div>Ksh {price}</div>
        <div>{location}</div>
      </div>
    </div>
  );
};

export default Property;

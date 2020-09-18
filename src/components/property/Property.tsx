import React, { FC, useContext, useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import { Link } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import PropertyModel from "../../models/PropertyModel";
import { getProperties, like } from "../../services/propertyService";

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
    likes,
  } = property;

  const {
    auth: { user },
  } = useContext(authContext);
  const [likeProperty, { data: likeData }] = useMutation(like);
  const { refetch } = useQuery("get properties", getProperties);

  useEffect(() => {
    if (likeData && likeData.msg === "Success") {
      refetch();
    }
    // eslint-disable-next-line
  }, [likeData]);

  return (
    <div className="property">
      <div>
        <div
          className="image"
          style={{
            background: `url(/api/files/${image})`,
          }}
        >
          {user && (
            <div
              style={{
                padding: `8px`,
                background: `#0000005f`,
                color: `#fff`,
                height: `40px`,
              }}
              onClick={async () => {
                await likeProperty({ id: _id });
              }}
            >
              <span>
                <span className="material-icons">
                  {likes?.includes(user._id || "")
                    ? "bookmark"
                    : "bookmark_border"}
                </span>
              </span>
            </div>
          )}
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
            <div
              style={{ color: `#666`, fontSize: "20px", marginLeft: "4px" }}
              className="material-icons"
            >
              hotel
            </div>
          </span>
          <span style={{ display: "flex", marginLeft: "16px" }}>
            <span>{bathrooms}</span>
            <div
              style={{ color: `#666`, fontSize: "20px", marginLeft: "4px" }}
              className="material-icons"
            >
              bathtub
            </div>
          </span>
        </div>
        <div>Ksh {price}</div>
        <div>{location}</div>
      </div>
    </div>
  );
};

export default Property;

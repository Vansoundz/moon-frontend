import React from "react";
import { useQuery } from "react-query";
import { getProperties } from "../../services/propertyService";
import PropertyModel from "../../models/PropertyModel";
import { Link } from "react-router-dom";
import Loading from "../layout/Loading";

const Listings = () => {
  const { data: properties, isLoading } = useQuery(
    "get properties",
    getProperties
  );

  return (
    <>
      {isLoading && <Loading />}
      <div style={{ padding: `16px` }}>
        <h4>Listings</h4>
        <div className="listings">
          {properties &&
            properties.map((property: PropertyModel, i: number) => (
              <div className="listing" key={i}>
                <div>
                  <div
                    className="l-image"
                    style={{ background: `url(/api/files/${property.image})` }}
                  ></div>
                </div>
                <div className="l-body">
                  <div className="lb-title">
                    <Link to={`/property/${property._id}`}>
                      {property.title}
                    </Link>
                  </div>
                  <div className="lb-title">{property.location}</div>
                  <div className="lb-title">Available</div>
                  <div className="lb-title">Ksh {property.price}</div>
                </div>
              </div>
            ))}
          {properties?.length === 0 && (
            <h3>ooops, we could not find any property now</h3>
          )}
        </div>
      </div>
    </>
  );
};

export default Listings;

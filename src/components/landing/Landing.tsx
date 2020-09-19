import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div
      style={{
        padding: "16px",
      }}
    >
      <div
        className="landing"
        style={{
          //   background: `url("/assets/homesbg.jpg")`,
          //   height: `calc(50vh)`,
          backgroundAttachment: `fixed`,
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flex: "1 0 300px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ maxWidth: "350px" }}>
          <div style={{ fontWeight: 200, fontSize: "44px" }}>
            Homes for everyone
          </div>
        </div>
        <div style={{ maxWidth: "350px" }}>
          <h4>Buy sell property</h4>
          <div
            style={{
              fontWeight: 200,
              fontSize: "14px",
              margin: "20px 0",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            molestiae, delectus accusamus distinctio hic, ad aliquam rem eveniet
            accusantium odio commodi ut quod velit tenetur beatae.
          </div>
          <Link to="/listings"> View listings</Link>
        </div>
      </div>
      <div
        style={{
          background: `#fff")`,
          height: `calc(60vh)`,
        }}
      >
        Some text
      </div>
      <div
        style={{
          background: `#4d61ec`,
          height: `calc(60vh)`,
          backgroundPosition: `fixed`,
        }}
      >
        Some text
      </div>
    </div>
  );
};

export default Landing;

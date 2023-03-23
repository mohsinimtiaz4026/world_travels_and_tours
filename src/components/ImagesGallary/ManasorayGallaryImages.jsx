import React from "react";
import gallaryImages from "./ImagesGallary";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const ManasorayGallaryImages = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Masonry gutter="1rem">
        {gallaryImages.map((item, index) => {
          return (
            <img
              src={item}
              key={index}
              alt=""
              style={{
                width: "100%",
                display: "block",
                borderRadius: "10px",
              }}
              className="masonry__img"
            />
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default ManasorayGallaryImages;

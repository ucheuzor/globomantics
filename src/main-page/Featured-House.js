import React from "react";
import House from "../house/House";

const FeaturedHouse = ({ house }) => {
  if (house) {
    return (
        <div>
            <div className="row FeaturedHouse">
                <h3 className="col-md-12 text-center">Featured House</h3>
                <House house = {house} />
            </div>
        </div>
    )
  }
  return <div>No featured house at this time</div>
};

export default FeaturedHouse;

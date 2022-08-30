import React from "react";
import { data } from "../data/data";
const Navbar = (props) => {
  return (
    <div className="py-3 px-4 background-dark hover-link">
      <div className="row">
        {data.map((ele) => {
          return (
            <h6
              className="col-lg-2"
              onClick={() => {
                props.setCurrent({ tag: ele.tag, image: ele.image });
                props.setPagination(false);
              }}
            >
              {ele.tag}
            </h6>
          );
        })}
        <h6
          className="col-lg-2"
          onClick={() => {
            props.setPagination(true);
          }}
        >
          With Pagination
        </h6>
      </div>
    </div>
  );
};

export default Navbar;

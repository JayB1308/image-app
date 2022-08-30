import React, { useState } from "react";
import { data } from "../data/data";

const Pagination = () => {
  const [currentItem, setCurrentItem] = useState(1);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          {data.map((ele) => {
            return (
              <img
                src={ele.image}
                alt=""
                className={`image-banner ${
                  ele.id === currentItem ? "" : "no-show"
                }`}
              />
            );
          })}
        </div>
        <div className="col-lg-2"></div>
      </div>
      <div className="row my-6">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <ul className="pagination">
            {data.map((ele) => {
              return (
                <li
                  className="page-item"
                  onClick={() => {
                    setCurrentItem(ele.id);
                  }}
                >
                  <p
                    className={`page-link ${
                      ele.id === currentItem ? "active" : ""
                    }`}
                  >
                    {ele.id}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
};

export default Pagination;

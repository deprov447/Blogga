import React from "react";
import "./item.css";

const item = (props) => {
  //have to add writer
  var url = "url(" + props.data.image + ")";
  return (
    <div className="col s6 l4">
      <a href="google.com">
        <div className="card horizontal hoverable">
          <div
            className="card-image"
            style={{ backgroundImage: url, width: "25%" }}
          ></div>
          <div class="card-stacked">
            <div class="card-content">
              <h5>{props.data.title}</h5>
              <p>{props.data.body.substring(0, 50)}...</p>
            </div>
            <div class="card-action">
              Penned by {props.data.author}
              <span className="right">
                {props.data.created.substring(0, 10)}
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default item;

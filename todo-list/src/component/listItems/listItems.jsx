import React from "react";
import "./style.css";

import FlipMove from "react-flip-move";

function ListItems(props) {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}
          />
          <span>
            <i
              className="fas fa-trash"
              onClick={() => {
                props.deleteItem(item.key);
              }}
            ></i>
            <i
              class="fas fa-check-square"
              onClick={() => {
                props.setDone(item.key);
              }}
            ></i>
          </span>
        </p>
      </div>
    );
  });
  return (
    <div className="To-Do-list">
      <h2>To-Do</h2>
      <p className="note">*To edit task just click on it</p>
      <FlipMove duration={300} easing="ease-in-out">
        {listItems}
      </FlipMove>
    </div>
  );
}

export default ListItems;

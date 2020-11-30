import React, { useContext } from "react";
import { UserContext } from "../../UserContext";

import "./style.css";

import FlipMove from "react-flip-move";

function Donelist(props) {
  const msg = useContext(UserContext);

  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <div className="done-list" key={item.key}>
        <p>
          {item.text} <br /> {msg}
        </p>
      </div>
    );
  });
  return (
    <div className="done-list-co">
      <h2>Done</h2>
      <FlipMove duration={300} easing="ease-in-out">
        {listItems}
      </FlipMove>
    </div>
  );
}

export default Donelist;

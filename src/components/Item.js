import React from "react";
import "./Item.scss";
import Data from "./Data";

const Item = ({ id, item, list, setList, complete }) => {
  const remove = (id) => {
    setList(list.filter((el) => el.id !== id));
  };



  

  const handleComplete = (id) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            complete: !item.complete,
          };
        }
        return item;
      })
    );
  };

  const handleItem = (e) => {
    setList(
      list.map((el) => {
        if (el.id === id) {
          return {
            ...el,

            item: e.target.value,
          };
        }

        return el;
      })
    );
  };

  return (
    <div className="item">
      <input
        onChange={handleItem}
        className={complete ? "complete" : ""}
        type="text"
        value={item}
        style={{
          border: "none",
          outline: "none",
          backgroundColor: "transparent",
          color: "white",
          fontSize: "20px",
        }}
      />
      <img
        onClick={() => handleComplete(id)}
        src="https://img.icons8.com/offices/40/000000/checked-2--v2.png"
        alt="complete task"
      />
      {/* <label class="toggle-switch">
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          name="complete task"
          id="toggleSwitch"
        />

        <label
          onClick={() => handleComplete(id)}
          className="toggle-switch-label"
          for="toggleSwitch"
        >
          <span className="toggle-switch-inner"></span>
          <span className="toggle-switch-switch"></span>
        </label>
      </label> */}

      <img
        onClick={() => remove(id)}
        src="https://img.icons8.com/color/48/000000/trash.png"
        alt="Delete"
      />
      <Data />
    </div>
  );
};
export default Item;

import React from "react";
import "./Item.scss";
import { format } from "date-fns";

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

      <label className="toggle-switch">
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          name="complete task"
          id="toggleSwitch"
        />

        <div
          onClick={() => handleComplete(id)}
          className="toggle-switch-label"
          htmlFor="toggleSwitch"
        >
          <span className="toggle-switch-inner"></span>
          <span className="toggle-switch-switch"></span>
        </div>
      </label>
      <select
        value={categoryId}
        onChange={this.handleChange}
        className="select"
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <img
        onClick={() => remove(id)}
        src="https://img.icons8.com/color/48/000000/trash.png"
        alt="Delete"
      />
      <span>{format(new Date(), "MM/dd/yyyy")}</span>
    </div>
  );
};
export default Item;

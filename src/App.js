import React, { useState } from "react";
import "./App.css";
import Item from "./components/Item";
import { v4 as uuidv4 } from "uuid";

const array = () => {
  let data = localStorage.getItem("data");

  if (data) {
    return JSON.parse(localStorage.getItem("data"));
  } else return [];
};

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState(array);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: uuidv4(),
      item: item,
      complete: false,
    };

    if (item) {
      setList([...list, newItem]);
      setItem("");
    }
  };

  React.useEffect(() => {
    localStorage.setItem("data", JSON.stringify(list));
  }, [list]);

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const sortArray = () => {
    const sorted = list.sort((a, b) => {
      return a.item - b.item;
    });

    setList(sorted);
  };

  return (
    <div className="App">
      <h1>Grocery List</h1>
      <button onClick={() => sortArray()}>sorted name</button>
      {/* <select onChange={(e) => sortArray(e.target.value)}>
        <option value="false">ran out</option>
        <option value="true">have</option>
      </select> */}

      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={item}
          placeholder="Enter the items"
          onChange={handleChange}
        />
        <button className="btn" type="submit">
          Add Items
        </button>
      </form>

      <div>
        {list.map((myitem, id) => (
          <Item
            key={id}
            id={myitem.id}
            item={myitem.item}
            list={list}
            setList={setList}
            complete={myitem.complete}
            setItem={setItem}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

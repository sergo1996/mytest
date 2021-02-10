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
  const [status, setStatus] = useState("");
  const [item, setItem] = useState("");
  const [list, setList] = useState(array);

  React.useEffect(() => {
    localStorage.setItem("data", JSON.stringify(list));
  }, [list]);

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

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const sortArray = () => {
    const nameMass = list.concat();
    const sorted = nameMass.sort((a, b) => {
      return a.complete - b.complete;
    });

    setList(sorted);
  };

  const sortStatus = () => {
    const nameMass = list.concat();
    const sorted = nameMass.sort((a, b) => {
      return a.complete - b.complete;
    });

    setList(sorted);
  };
  console.log(status);
  return (
    <div className="App">
      <h1>Grocery List</h1>
      <div>
        <button className="buttonSorteItem" onClick={() => sortArray()}>
          sorted by name
        </button>
        <button className="buttonSorteItem" onClick={() => sortStatus()}>
          filter by status
        </button>
      </div>

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

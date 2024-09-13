import { useState, useMemo } from "react";
import ItemComponent from "./ItemComponent";

let initData = () => {
  let data = [];
  for (let i = 1; i <= 20; i++) {
    data.push({
      id: i,
      title: `hw-${i}`,
      status: false,
    });
  }
  return data;
};

const list = initData();

export default function List() {
  const [items, setItems] = useState(list);
  const [newItemTitle, setNewItemTitle] = useState("");

  const memoizedItems = useMemo(() => items, [items]);

  const addNewItem = () => {
    const newItem = {
      id: items.length + 1,
      title: newItemTitle,
      status: false,
    };

    setItems((prevItems) => [...prevItems, newItem]);
    setNewItemTitle("");
  };

  const deleteItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <>
      <input
        value={newItemTitle}
        onChange={(e) => setNewItemTitle(e.target.value)}
      />
      <button onClick={addNewItem}>+</button>
      <ul>
        {memoizedItems.map((item) => (
          <ItemComponent key={item.id} item={item} deleteItem={deleteItem} />
        ))}
      </ul>
    </>
  );
}

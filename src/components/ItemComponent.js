import { memo } from "react";

const ItemComponent = memo(({ item, deleteItem }) => {
  console.log(`render ${item.title}`);
  return (
    <li>
      {item.title}
      <button onClick={() => deleteItem(item.id)}>x</button>
    </li>
  );
});

export default ItemComponent;

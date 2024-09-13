import { useContext } from "react";
import { myContext } from "../context/myContext";

export default function ComponentWithControl() {
  const [text, setText] = useContext(myContext);

  const searchHandler = (event) => {
    let value = event.target.value;
    setText(value);

    console.log(`API with control ${value}`);
  };
  return (
    <>
      <input
        type="text"
        placeholder="search"
        value={text}
        onChange={searchHandler}
      />
    </>
  );
}

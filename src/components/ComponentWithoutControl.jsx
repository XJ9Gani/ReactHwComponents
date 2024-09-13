import { useRef } from "react";

export default function ComponentWithControl() {
  const text = useRef(null);

  const searchHandler = () => {
    let value = text.current.value;
    console.log(`API without control ${value}`);
  };
  return (
    <>
      <input
        type="text"
        placeholder="search"
        ref={text}
        onChange={searchHandler}
      />
    </>
  );
}

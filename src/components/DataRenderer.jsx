export default function DataRenderer({ render }) {
  const data = [
    { id: 1, title: "hw1" },
    { id: 2, title: "hw2" },
    { id: 3, title: "hw3" },
    { id: 4, title: "hw4" },
  ];
  return (
    <>
      <ul>{render({ data })}</ul>
    </>
  );
}

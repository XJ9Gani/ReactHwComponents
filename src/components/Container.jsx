export default function Container({ children }) {
  return (
    <>
      <div
        style={{
          border: "1px solid black",
          width: "200px",
          padding: "10px",
          backgroundColor: "grey",
        }}
      >
        {children}
      </div>
    </>
  );
}

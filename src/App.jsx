import { useState } from "react";
import ComponentWithControl from "./components/ComponentWithControl";
import ComponentWithoutControl from "./components/ComponentWithoutControl";
import { myContext } from "./context/myContext";
import TestLazyComponent from "./components/TestLazyComponent";
import List from "./components/List";
import Card from "./components/Card";
import Container from "./components/Container";
import DataRenderer from "./components/DataRenderer";
export default function App() {
  const [text, setText] = useState("");
  return (
    <>
      <h1>Задание 1</h1>
      <TestLazyComponent />

      <hr />
      <h1>Задание 2</h1>

      <List />

      <hr />
      <h1>Задание 3</h1>
      <h2>{text}</h2>
      <myContext.Provider value={[text, setText]}>
        <ComponentWithControl />
        <ComponentWithoutControl />
      </myContext.Provider>

      <hr />
      <h1>Задание 4</h1>

      <Container>
        <Card>
          <DataRenderer
            render={({ data }) => (
              <ul>
                {data.map((el) => (
                  <li>
                    <h1>id: {el.id}</h1>
                    <p>title: {el.title}</p>
                  </li>
                ))}
              </ul>
            )}
          />
        </Card>
      </Container>
    </>
  );
}

import type { JSX } from "react";
import Header from "./components/Header";
import MastercraftWrapper from "./components/MastercraftWrapper";

function App(): JSX.Element {
  return (
    <>
      <Header />
      <MastercraftWrapper />
    </>
  );
}

export default App;

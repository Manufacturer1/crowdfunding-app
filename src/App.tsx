import type { JSX } from "react";
import Header from "./components/Header";
import MastercraftWrapper from "./components/MastercraftWrapper";
import { BackProjectProvider } from "./contexts/BackProjectContext";
import BackProjectModal from "./components/BackProjectModal";

function App(): JSX.Element {
  return (
    <>
      <BackProjectProvider>
        <Header />
        <MastercraftWrapper />
        <BackProjectModal />
      </BackProjectProvider>
    </>
  );
}

export default App;

import type { JSX } from "react";
import Header from "./components/Header";
import MastercraftWrapper from "./components/MastercraftWrapper";
import { BackProjectProvider } from "./contexts/BackProjectContext";
import BackProjectModal from "./components/BackProjectModal";
import SuccessModal from "./components/SuccessModal";

function App(): JSX.Element {
  return (
    <>
      <BackProjectProvider>
        <Header />
        <MastercraftWrapper />
        <BackProjectModal />
        <SuccessModal />
      </BackProjectProvider>
    </>
  );
}

export default App;

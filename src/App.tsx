import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="h-dvh bg-black"></div>
    </main>
  );
};

export default App;

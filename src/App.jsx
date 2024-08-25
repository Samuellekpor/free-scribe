import { useState } from "react";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
function App() {
  return (
    <div className="flex flex-col max-w-[1000px] mx-auto w-full">
      <section className="min-h-screen flex flex-col">
        <Header />
        <HomePage />
      </section>
      <h1 className="text-3xl font-bold text-red-800">hello</h1>
      <footer></footer>
    </div>
  );
}

export default App;

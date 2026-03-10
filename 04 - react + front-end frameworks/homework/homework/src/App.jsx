import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Users from "./components/Users";
import Posts from "./components/Posts";

function App() {
  return (
    <>
      <body>
        <Header />
        <main className="flex w-full">
          <Users />
          <Posts />
        </main>
      </body>
    </>
  );
}

export default App;

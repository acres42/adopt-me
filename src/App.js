import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Dante", animal: "Dog", breed: "Mutt" }),
    React.createElement(Pet, { name: "Virgil", animal: "Dog", breed: "Mutt" }),
    React.createElement(Pet, { name: "Westly", animal: "Fish", breed: "Betta" }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));

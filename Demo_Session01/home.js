import header from "./header.js";

const nav = header();
const container = document.querySelector("#container");
const head = document.createElement("div");
head.innerHTML = nav;
container.appendChild(head);

const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerHTML = "Javascript";
const li2 = document.createElement("li");
li2.innerHTML = "ReactJs";
ul.appendChild(li1);
ul.appendChild(li2);
container.appendChild(ul);

const reactUl = React.createElement(
  "ul",
  null,
  React.createElement("li", null, "Javascript 123"),
  React.createElement("li", null, "ReactJs 123")
);
// ReactDOM.render(reactUl, container);

const root = ReactDOM.createRoot(container);
root.render(reactUl);

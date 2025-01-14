// const heading = React.createElement('h1', { id: 'heading' }, 'Hello World from React!');

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm a h1 tag!"),
    React.createElement("h2", {}, "I'm a h2 tag!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm a h1 tag!"),
    React.createElement("h2", {}, "I'm a h2 tag!"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);

import React from "react";
import "../node_modules/materialize-css/dist/css/materialize.min.css";

import NavBar from "./components/NavBar";
import Body from "./components/Body";

const App = () => {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Body></Body>
    </React.Fragment>
  );
};

export default App;

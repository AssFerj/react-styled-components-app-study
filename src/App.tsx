import React from "react";
import GlobalStyled from "./config/GlobalStyled";
import AppRoutes from "./router/AppRoutes";

function App() {
  return (
    <React.Fragment>
      <GlobalStyled />
      <AppRoutes />
    </React.Fragment>
  );
}

export default App;

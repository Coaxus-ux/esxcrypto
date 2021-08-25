import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

function App() {
  const [toHref, setToHref] = useState(0);
  return (
    <Fragment>
      <Header
        setToHref={setToHref}
      />
      {
        toHref === 0 ?  <HomePage />: null
        
      }
     
    </Fragment>
  );
}

export default App;

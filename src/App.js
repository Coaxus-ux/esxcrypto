import { Fragment, useState } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Cryptocurrency from "./components/Cryptocurrency";

function App() {
  const [toHref, setToHref] = useState(0);
  const [coins, setCoins] = useState([]);
  
  return (
    <Fragment>
      <Header
        setToHref={setToHref}
      />
      {
        toHref === 0 ?  <HomePage setCoins={setCoins} />: toHref === 1 ? <Cryptocurrency coins={coins}/> : null
      }
      
     
    </Fragment>
  );
}

export default App;

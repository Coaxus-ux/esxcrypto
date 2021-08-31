import { Fragment, useState } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Cryptocurrency from "./components/Cryptocurrency";
import Sale from "./components/Sale";
import Nft from "./components/Nft";

function App() {
  const [toHref, setToHref] = useState(0);
  const [coins, setCoins] = useState([]);
  const [nftList, setNftList] = useState([]);

  return (
    <Fragment>
      <Header setToHref={setToHref} />
      {toHref === 0 ? (
        <HomePage setCoins={setCoins} setNftList={setNftList} />
      ) : toHref === 1 ? (
        <Cryptocurrency coins={coins} />
      ) : toHref === 2 ? (
        <Sale />
      ) : toHref === 4 ? (
        <Nft nftList={nftList} />
      ) : null}
    </Fragment>
  );
}

export default App;

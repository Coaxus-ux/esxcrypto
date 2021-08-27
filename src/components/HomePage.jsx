import { useState, useEffect } from "react";
import axios from "axios";

const HomePage = ({setCoins}) => {
  const [crypto, setCrypto] = useState([]);
  useEffect(() => {
    const query = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const url2 =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=30&tsym=USD";
      const res = await axios.get(url);
      const res2 = await axios.get(url2);
      setCrypto(res.data.Data);
      setCoins(res2.data.Data);
    };
    query();
    
  }, [setCoins]);
  

  return (
    <div className="container mx-auto grid grid-cols-1 my-4 md:grid-cols-1 lg:grid-cols-2">
      <div>
        <h1 className="text-white  font-bold text-7xl md:text-9xl">
          CHANGE YOUR LIFE WITH
        </h1>
        <span className="text-green-400 font-bold text-7xl md:text-9xl">
          ESX
        </span>
        <div className="frame w-52 h-12 items-center">
          <span className="text-blue-700 px-4 ">100% &nbsp;</span>
          Insurange
        </div>
        &nbsp;
        <div className="frame w-56 h-12 items-center">
          <span className="text-blue-700 px-4 ">0% &nbsp;</span>
          Transfer cost
        </div>
        &nbsp;
        <div className="frame w-72 h-12 items-center">
          <span className="text-blue-700 px-4 ">+1000 &nbsp;</span>
          Cryptocurrencies
        </div>
      </div>
      <div>
        <div className="flex justify-center py-9 flex-col ">
          <h1 className="text-white text-4xl uppercase mx-auto my-4">top Cryptocurrencies</h1>
          {crypto.map((coin) => (
            
            <div className="frame w-80 mx-auto my-2 h-14 items-center" key={coin.CoinInfo.Id}>
              <div className="text-green-500 font-bold mx-2 text-3xl">
                {coin.CoinInfo.Name}
              </div>
              <div>
                <div className="text-base text-white">
                  {coin.CoinInfo.FullName}
                </div>
                <div className="text-xs text-blue-500">
                  Price: {coin.DISPLAY.USD.PRICE}
                </div>
                
              </div>
              &nbsp;
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

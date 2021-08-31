import { Fragment, useState } from "react";
import SingleCoinInfo from "./SingleCoinInfo";

const Cryptocurrency = ({ coins }) => {
  const [showCoin, setShowCoin] = useState(false);
  const [infoCoin, setInfoCoin] = useState(coins[0]);

  const coinFilter = e =>{
      e.preventDefault();
      
      if(e.target.value === "all"){
        setShowCoin(false);
      }else{
        setInfoCoin(
          coins.filter(function(el){
            return (el.CoinInfo.Id === e.target.value);
          })
        )
        setShowCoin(true)
      }
      
  }
  return (
    <Fragment>
      <div className="flex flex-col mx-10 md:flex-row w-56">
        <div class="w-full flex flex-col mb-3">
          <label class="font-semibold text-gray-600 py-2">Search a single crypto</label>
          <select class="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
            onChange={coinFilter}
          >
            <option value="all">All</option>
            {coins.map((coin) => (
              <option key={coin.CoinInfo.Id} value={coin.CoinInfo.Id}>
                {coin.CoinInfo.FullName}
              </option>
            ))}
          </select>
        </div>
      </div>

      {showCoin ? (
        <SingleCoinInfo 
            infoCoin = {infoCoin}
        />
      ) : (
        <div className=" grid grid-cols-1 ms:grid-cols-2 md:grid-cols-2 2xl:grid-cols-4 gap-y-4 justify-items-center">
          {coins.map((coin) => (
            <div
              className="bg-glass frame h-64 w-80 md:h-64 md:w-96 flex flex-col"
              href="/#"
  
              key={coin.CoinInfo.Id}
            >
              <div className="m-4 uppercase text-green-500 text-3xl font-bold ">
                <p>{coin.CoinInfo.FullName}</p>
              </div>
              <div className="grid grid-cols-2 m-6 justify-items-center">
                <div className="h-16 w-32 uppercase font-bold text-blue-400">
                  <p>Block #</p>
                  <p className="text-white text-sm">
                    {coin.CoinInfo.BlockNumber !== 0
                      ? coin.CoinInfo.BlockNumber
                      : "--"}
                  </p>
                </div>
                <div className="h-16 w-32 uppercase font-bold text-blue-400">
                  <p>Price</p>
                  <p className="text-white text-sm">
                    {" "}
                    {coin.DISPLAY.USD.PRICE}{" "}
                  </p>
                </div>
                <div className="h-16 w-32 uppercase font-bold text-blue-400">
                  <p>volume</p>
                  <p className="text-white text-sm">
                    {coin.DISPLAY.USD.VOLUMEDAYTO}
                  </p>
                </div>
                <div className="h-16 w-32 uppercase font-bold text-blue-400">
                  <p>LOW</p>
                  <p className="text-white text-sm">
                    {coin.DISPLAY.USD.LOWDAY}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default Cryptocurrency;

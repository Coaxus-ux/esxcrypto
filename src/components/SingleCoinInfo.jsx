import React from "react";
const SingleCoinInfo = ({ infoCoin }) => {
  return (
    <div className=" grid grid-cols-1  gap-y-4 justify-items-center mx-auto">
    {infoCoin.map((coin) => (
        <div
          className="bg-glass frame h-full w-full md:h-full md:w-96 flex flex-col"

 
          key={coin.CoinInfo.Id}
        >
          <div className="m-4 uppercase text-green-500 text-3xl font-bold">
            <p>{coin.CoinInfo.FullName}</p> <p className="text-white text-xs align-bottom">{coin.CoinInfo.Algorithm} - {coin.CoinInfo.AssetLaunchDate}</p>
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
              <p className="text-white text-sm"> {coin.DISPLAY.USD.PRICE} </p>
            </div>
            <div className="h-16 w-32 uppercase font-bold text-blue-400">
              <p>volume</p>
              <p className="text-white text-sm">
                {coin.DISPLAY.USD.VOLUMEDAYTO}
              </p>
            </div>
            <div className="h-16 w-32 uppercase font-bold text-blue-400">
              <p>LOW</p>
              <p className="text-white text-sm">{coin.DISPLAY.USD.LOWDAY}</p>
            </div>
            <div className="h-16 w-32 uppercase font-bold text-blue-400">
              <p>BlockReward</p>
              <p className="text-white text-sm">  {coin.CoinInfo.BlockTime !== 0
                  ? coin.CoinInfo.BlockReward
                  : "--"} </p>
            </div>
            <div className="h-16 w-32 uppercase  font-bold text-blue-400">
              <p>change</p>
              <p className="text-white text-sm">  {coin.DISPLAY.USD.CHANGE24HOUR} </p>
            </div>
          </div>
        </div>
      ))}
    </div>

  );
};

export default SingleCoinInfo;

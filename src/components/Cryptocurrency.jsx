import { Fragment } from "react";

const Cryptocurrency = ({ coins }) => {
  return (
    <Fragment>
      <div className=" grid grid-cols-1 ms:grid-cols-2 md:grid-cols-2 2xl:grid-cols-4  gap-y-4    justify-items-center">
        
        {
          coins.map( (coin) => (
            <div className="bg-glass frame h-64 w-80 md:h-64 md:w-96 flex flex-col" key={coin.CoinInfo.Id}>
          <div className="m-4 uppercase text-green-500 text-3xl font-bold ">
            <p>{coin.CoinInfo.FullName}</p>
          </div>
          <div className="grid grid-cols-2 m-6 justify-items-center">
            <div className="h-16 w-32 uppercase font-bold text-blue-400">
            <p>Block #</p>
            <p className="text-white text-sm">  {coin.CoinInfo.BlockNumber} </p>
            </div>
            <div className="h-16 w-32 uppercase font-bold text-blue-400">
            <p>Price</p>
            <p className="text-white text-sm">  {coin.DISPLAY.USD.PRICE} </p>
            </div>
            <div className="h-16 w-32 uppercase font-bold text-blue-400">
            <p>volume</p>
            <p className="text-white text-sm">  {coin.DISPLAY.USD.VOLUMEDAYTO} </p>
            </div>
            <div className="h-16 w-32 uppercase font-bold text-blue-400">
            <p>LOW</p>
            <p className="text-white text-sm">  {coin.DISPLAY.USD.LOWDAY} </p>
            </div>
          </div>
        </div>
          ))
        }
      
        
      </div>
    </Fragment>
  );
};

export default Cryptocurrency;

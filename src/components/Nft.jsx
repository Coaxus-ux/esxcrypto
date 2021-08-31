import {useState, useEffect} from "react";

const Nft = ({nftList}) => {
    const [nftListClean, setNftListClean] = useState([]);
    useEffect(() => {
        setNftListClean(
            nftList.filter(function(el){
                return (el.name !== null)
            })
        )
    },[])
    
  return (
    <div className="grid grid-cols-1 ms:grid-cols-2 md:grid-cols-2 2xl:grid-cols-3 gap-y-4 gap-x-4 justify-items-center mx-24">
      {nftListClean.map((nft) => (
        <div className="frame h-full w-full " key={nft.id}>
            <div className="m-3 ">
                <img className="h-44 rounded-lg " alt={nft.name} src={nft.image_url}>

                </img>
                <p className="text-xs">{nft.asset_contract.created_date}</p>
                
            </div>
            <div>
                <p className="my-4 mx-2 text-2xl">{nft.name}</p>
            </div>
        </div>
      ))

          
      }
      
    </div>
  );
};

export default Nft;
<h1>NFT</h1>;

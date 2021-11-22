import "./Hero.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Web3 from 'web3'

const Hero = () => {
  toast.configure();

  const mintNFT = async () => {
    // Check if wallet is connected;
    if (window.tronWeb) {
      // Check if wallet is connected:
      if (window.tronWeb.ready) {
        console.log(window.tronWeb.defaultAddress.base58);
        const tronWeb = window.tronWeb;
        // console.log(tronWeb.contract(require("./myNFT.json"), "0x81c587EB0fE773404c42c1d2666b5f557C470eED"), "make we see")
        const web3 = new Web3(window.tronWeb);
        const contract = require("./myNFT.json");
        const contractAddress = "0x81c587EB0fE773404c42c1d2666b5f557C470eED";
        console.log(contract, "contract.abi")
        const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

        const PUBLIC_KEY = "TByDAH2qDNynKvgS64mAinQRmGDjChzxxX";
        const PRIVATE_KEY = ""
        const tokenURI = "https://gateway.pinata.cloud/ipfs/QmYueiuRNmL4MiA2GwtVMm6ZagknXnSpQnB3z2gWbz36hP"

        const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest'); //get latest nonce
        //the transaction
        const tx = {
          'from': PUBLIC_KEY,
          'to': contractAddress,
          'nonce': nonce,
          'gas': 500000,
          'maxPriorityFeePerGas': 1999999987,
          'data': nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI()
        };
        const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
        signPromise.then((signedTx) => {
          web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(err, hash) {
            if (!err) {
              console.log("The hash of your transaction is: ", hash, "\nCheck Alchemy's Mempool to view the status of your transaction!"); 
            } else {
              console.log("Something went wrong when submitting your transaction:", err)
            }
          });
        }).catch((err) => {
          console.log("Promise failed:", err);
        });

        throw new Error("End command");


        var fromAddress = "TM2TmqauSEiRf16CyFgzHV2BVxBejY9iyR"; //address _from
        var toAddress = "TVDGpn4hCSzJ5nkHPLetk8KQBtwaTppnkr"; //address _to
        var amount = 10000000; //amount

        try {
        //Creates an unsigned TRX transfer transaction
        let tradeobj = await tronWeb.transactionBuilder.sendTrx(
          toAddress,
          amount,
          fromAddress
        );
        console.log(tradeobj, "tradeobj");
        
        const signedtxn = await tronWeb.trx.sign(tradeobj);
        const receipt = await tronWeb.trx.sendRawTransaction(signedtxn);

        console.log("Transferred TRX", receipt, signedtxn);
        toast.success("Minted Successfully", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 10000,
        });
        }
        catch(error) {
            console.log(error)
            toast.error(String(error).split(":")[1], {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 10000,
              });

        }

        //
      } else {
        console.log("Wallet not connected. Please connect your wallet.");
        toast.error("Please Connect Wallet First.", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 10000,
        });

        // Then if connected:

        // Go to the person's gallery.
      }
    } else {
      toast.success("Please install a TRON Wallet Extension.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 10000,
      });
      window.open("https://www.tronlink.org/", "_blank");
    }
  };

  return (
    <div className="hero">
      <h5>COLLECTION OF 1,111 NFTs OF TIGERS AROUND THE GLOBE</h5>
      <h1>INTRODUCING MIGHTY TIGERS</h1>
      <p>
        Our collection consists of 1,111 NFTs backed up by real life data of
        tigers around the world.
      </p>
      <p>Get your own Tiger on blockchain now!</p>
      <button onClick={mintNFT} className="cta">
        MINT NOW
      </button>
    </div>
  );
};

export default Hero;

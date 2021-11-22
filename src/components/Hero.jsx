import "./Hero.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hero = () => {
  toast.configure();

  const mintNFT = async () => {
    // Check if wallet is connected;
    if (window.tronWeb) {
      // Check if wallet is connected:
      if (window.tronWeb.ready) {
        console.log(window.tronWeb.defaultAddress.base58);
        const tronWeb = window.tronWeb;
        console.log(tronWeb, "Contract oo")

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

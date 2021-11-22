import tigerart from '../assets/tigerart.jpg';
import {useState} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Wallet = ()=> {

    const [connected, setConnected] = useState(false);
    const [sell, setSell] = useState(false);
    const [view, setView] = useState(false);

    const handleClick = () => {
        // setOpenModal(true);
         setSell(true);
    };

    const handleView = ()=> {
        // setOpenModal(true);
         setView(true);
    }

    toast.configure()

    const connectWallet = async () => {
        //Check if tron wallet is installed.
        if(window.tronWeb){
            // Check if wallet is connected:
            if (window.tronWeb.ready) {
                setConnected(true);
            } else{
                console.log("Wallet not connected. Please connect your wallet.");
                toast.success("Wallet not connected. Please connect your wallet.", { position: toast.POSITION.TOP_CENTER, autoClose: 10000 });

                // Then if connected:

                // Go to the person's gallery.
            }
        }else{
            window.open("https://www.tronlink.org/", "_blank");
        }
      };


    if (connected){

    return (

        
        <div className="Wallet">
            <div className="filter">
                <h4>Search by Id</h4>
                <div className="fields">
                    <input type="text" className="search" placeholder="Search by ID" />
                    <input type="text" className="search" placeholder="Filter"/>
                </div>
            </div>

            <div className="arts">
                <div className="art">
                    <div className="artimage">
                        <img src={tigerart} alt="" className="imgr"/>
                        <p>MightyTiger #1</p>
                    </div>
                    <div className="attr">
                        <div className="feats">
                            <div className="feat">Bold</div>
                            <div className="feat">Orange</div>
                            <div className="feat">fierce</div>
                            <div className="feat">male</div>
                        </div>

                        <div className="view">
                            <button onClick={handleClick}>SELL</button>
                            <button onClick={handleView}>VIEW BIDS</button>
                        </div>
                    </div>
                </div>


                <div className="art">
                    <div className="artimage">
                        <img src={tigerart} alt="" className="imgr"/>
                        <p>MightyTiger #1</p>
                    </div>
                    <div className="attr">
                        <div className="feats">
                            <div className="feat">Bold</div>
                            <div className="feat">Orange</div>
                            <div className="feat">fierce</div>
                            <div className="feat">male</div>
                        </div>

                        <div className="view">
                        <button onClick={handleClick}>SELL</button>
                        <button onClick={handleView}>VIEW BIDS</button>
                        </div>
                    </div>
                </div>
            </div>


            {sell && (<div className="modalBackground">
                                <div className="modalContainer">
                         
                               
                                  <div className="titleCloseBtn">
                              <button id="cancelBtn" onClick={() => setSell(false)}>X</button>
                                <div className="title">
                                  <h1>SELL</h1>
                                </div>
                         
                                <div className="body">
                                  <form action="">
                                      <input type="text" placeholder="Set Bid Price"/>
                                      <button id="modalaction">Set Price</button>
                                  </form>
                               </div>
                               </div> 
                         
                               
                         
                               </div>
                              </div>)}{view && (   <div className="modalBackground">
        <div className="modalContainer">
 
       
          <div className="titleCloseBtn">
      <button id="cancelBtn" onClick={() => setView(false)}>X</button>
        <div className="title">
          <h1>BIDS</h1>
        </div>
 
        <div className="body">
          <div className="thead">
             <p>From</p>
             <p>Amount</p>
             <p>Date</p>
          </div>
          <div className="tbody">
              <p>Tabc9.....8k8k</p>
             <p>5TRX</p>
             <p>9/23/21</p>
             </div>

             <button id="modalaction">Accept Bid</button>
       </div>
       </div> 
 
       
 
       </div>
      </div>)}

        </div>
    )}else {
        return (
            <div className="Connect">
            <h3>Connect Wallet</h3>
            <button onClick={()=> connectWallet()} className="connectbtn">Connect</button>
        </div>
        )
    }
}

export default Wallet;
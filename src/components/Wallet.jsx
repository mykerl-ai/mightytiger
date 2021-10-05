import tigerart from '../assets/tigerart.jpg';
import {useState, useEffect} from 'react';


const Wallet = ()=> {

    const [connected, setConnected] = useState(false);

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
                            <button>SELL</button>
                            <button>VIEW BIDS</button>
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
                        <button>SELL</button>
                        <button>VIEW BIDS</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}else {
        return (
            <div className="Connect">
            <h3>Connect Wallet</h3>
            <button onClick={()=> setConnected(true)} className="connectbtn">Connect</button>
        </div>
        )
    }
}

export default Wallet;
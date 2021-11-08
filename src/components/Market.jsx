import './Market.css';
import tigerart from '../assets/tigerart.jpg';
import {useState} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Market = ()=> {

    // const [openModal, setOpenModal] = useState(false);
    const [buy, setBuy] = useState(false);
    const [view, setView] = useState(false);

    const handleClick = () => {
        // setOpenModal(true);
         setBuy(true);
    };

    const handleView = ()=> {
        // setOpenModal(true);
         setView(true);
    }

    toast.configure()

    const bid = ()=> {
        toast.success('Bid successful', { position: toast.POSITION.TOP_CENTER, autoClose: 10000 })
    }


    return (
        <div className="Market">
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
                            <button onClick={handleClick}>BUY</button>
                            <button onClick={handleView}>VIEW BIDS</button>
                            <button><span><svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.6748 1.08118L1.51855 4.88978C0.605469 5.23157 0 6.11048 0 7.08704V18.0783C0 18.9669 0.50293 19.7775 1.29395 20.173L11.4502 25.2511C12.1094 25.5831 12.8857 25.5831 13.5449 25.2511L23.7012 20.173C24.4971 19.7775 24.9951 18.962 24.9951 18.0783V7.08704C24.9951 6.11048 24.3896 5.23646 23.4766 4.89466L13.3203 1.08607C12.793 0.880987 12.207 0.880987 11.6748 1.08118ZM12.5 4.11341L21.875 7.62903V7.68274L12.5 11.4913L3.125 7.68274V7.62903L12.5 4.11341ZM14.0625 21.4962V14.2257L21.875 11.0519V17.59L14.0625 21.4962Z" fill="white"/>
                                          </svg>
                                    </span>
                                    View on IPFS
                            </button>
                            <button><span><svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.6748 1.08118L1.51855 4.88978C0.605469 5.23157 0 6.11048 0 7.08704V18.0783C0 18.9669 0.50293 19.7775 1.29395 20.173L11.4502 25.2511C12.1094 25.5831 12.8857 25.5831 13.5449 25.2511L23.7012 20.173C24.4971 19.7775 24.9951 18.962 24.9951 18.0783V7.08704C24.9951 6.11048 24.3896 5.23646 23.4766 4.89466L13.3203 1.08607C12.793 0.880987 12.207 0.880987 11.6748 1.08118ZM12.5 4.11341L21.875 7.62903V7.68274L12.5 11.4913L3.125 7.68274V7.62903L12.5 4.11341ZM14.0625 21.4962V14.2257L21.875 11.0519V17.59L14.0625 21.4962Z" fill="white"/>
                                          </svg>
                                    </span>
                                    View on Tronscan</button>
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
                        <button onClick={handleClick}>BUY</button>
                        <button onClick={handleView}>VIEW BIDS</button>
                            <button><span><svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.6748 1.08118L1.51855 4.88978C0.605469 5.23157 0 6.11048 0 7.08704V18.0783C0 18.9669 0.50293 19.7775 1.29395 20.173L11.4502 25.2511C12.1094 25.5831 12.8857 25.5831 13.5449 25.2511L23.7012 20.173C24.4971 19.7775 24.9951 18.962 24.9951 18.0783V7.08704C24.9951 6.11048 24.3896 5.23646 23.4766 4.89466L13.3203 1.08607C12.793 0.880987 12.207 0.880987 11.6748 1.08118ZM12.5 4.11341L21.875 7.62903V7.68274L12.5 11.4913L3.125 7.68274V7.62903L12.5 4.11341ZM14.0625 21.4962V14.2257L21.875 11.0519V17.59L14.0625 21.4962Z" fill="white"/>
                                          </svg>
                                    </span>
                                    View on IPFS
                            </button>
                            <button><span><svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.6748 1.08118L1.51855 4.88978C0.605469 5.23157 0 6.11048 0 7.08704V18.0783C0 18.9669 0.50293 19.7775 1.29395 20.173L11.4502 25.2511C12.1094 25.5831 12.8857 25.5831 13.5449 25.2511L23.7012 20.173C24.4971 19.7775 24.9951 18.962 24.9951 18.0783V7.08704C24.9951 6.11048 24.3896 5.23646 23.4766 4.89466L13.3203 1.08607C12.793 0.880987 12.207 0.880987 11.6748 1.08118ZM12.5 4.11341L21.875 7.62903V7.68274L12.5 11.4913L3.125 7.68274V7.62903L12.5 4.11341ZM14.0625 21.4962V14.2257L21.875 11.0519V17.59L14.0625 21.4962Z" fill="white"/>
                                          </svg>
                                    </span>
                                    View on Tronscan</button>
                        </div>
                    </div>
                </div>
            </div>


            {buy && (<div className="modalBackground">
                                <div className="modalContainer">
                         
                               
                                  <div className="titleCloseBtn">
                              <button id="cancelBtn" onClick={() => setBuy(false)}>X</button>
                                <div className="title">
                                  <h1>BUY</h1>
                                </div>
                         
                                <div className="body">
                                  <form action="">
                                      <input type="text" placeholder="Place Bid"/>
                                      <button onClick={bid} id="modalaction">Place Bid</button>
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

             <button id="modalaction">Place Bid</button>
       </div>
       </div> 
 
       
 
       </div>
      </div>)}
                              
                            
                            
        </div>
    
    )}

export default Market;
import './Market.css';
import tigerart from '../assets/tigerart.jpg'


const Market = ()=> {
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
                            <button>BUY</button>
                            <button>VIEW BIDS</button>
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
                        <button>BUY</button>
                        <button>VIEW BIDS</button>
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
        </div>
    )
}

export default Market;
import './Info.css'


const Info = () => {
    return (
        <div className="info">
             <div className="gloss1"></div>
            <div className="infotext">
                <h2>
                mint a tiger
                </h2>
                <p>mint  a  Tiger by connecting your Tron <br/> or Tronlink Wallet.</p>
            </div>

            <div className="infobox">
                <h5>Single</h5>
                <p>1 Mighty Tiger</p>
                <div className="box">3 TRX</div>
                <div className="line"></div>
                <button className="btn">mint now</button>
            </div>

            <div className="grid">
                <div className="item">
                    <p className="heading"> 10k ever minted</p>
                    <p className="body">Each Might Tiger is unique & algorithmically generated & minted on the Solana blockchain.<p> We are only ever generating 10k completely unique Sol Souls. There will be no further generations.</p></p>
                
                </div>

                <div className="item"> <p className="heading"> MightyTigers are arriving</p>
                    <p className="body">Get in on the ground floor by collecting the exclusive Sol Souls NFTs. See our roadmap for our future plans, including our DAPP interactive SOUL FUSION feature.</p>
                </div>

                <div className="item"> <p className="heading">Join the Tiger train</p>
                    <p className="body">Get the latest updates & get exclusive air drops & contests.</p>
                </div>
            </div>
            
        </div>
        
    )
}

export default Info
import './Footer.css';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="name">
                <h6>Mighty Tiger NFT</h6>
                <p>1,111 algorithmically generated, cute and collectible NFTs with proof of ownership stored on the Tron blockchain.</p>
            </div>
            <div className="name">
            <h6>Menu</h6>
            <ul>
                <li> <Link to="/">Home </Link></li>
                <li> <Link to="/gallery">Gallery </Link></li>
                <li> <Link to="/market">For Sale </Link></li>
                <li> <Link to="/wallet">My Wallet </Link></li>
            </ul>
            </div>
            <div className="name">
                <h6>Community</h6>
                <div className="social">
                    <button className="discord"></button>
                    <button className="twitter"></button>
                </div>
            </div>
            <div className="name">
                <div className="disc">
                    <div className="bar">
                        <div className="discord"></div>
                        <p>discord</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
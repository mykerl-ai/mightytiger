import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {


    return (
        <header>
            <div className="gloss"></div>
            <div className="logo"></div>
            <div className="menu">
                <Link to="/" href="#">Home</Link>
                <Link to="/gallery" href="#">Gallery</Link>
                <Link to="/market">For Sale</Link>
                <Link to="/wallet">My Wallet</Link>
            </div>
        </header>
    )
}

export default Navbar
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {


    return (
        <header>
            {/* <div className="gloss"></div> */}
            <div className="logo"></div>
            <div className="menu">
                <Link to="/" href="#">Home</Link>
                <Link to="/gallery" href="#">Gallery</Link>
                <a href="#">For Sale</a>
                <a href="#">My Wallet</a>
            </div>
        </header>
    )
}

export default Navbar
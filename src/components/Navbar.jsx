import './Navbar.css'

const Navbar = () => {


    return (
        <header>
            {/* <div className="gloss"></div> */}
            <div className="logo"></div>
            <div className="menu">
                <a href="#">Home</a>
                <a href="#">Gallery</a>
                <a href="#">For Sale</a>
                <a href="#">My Wallet</a>
            </div>
        </header>
    )
}

export default Navbar
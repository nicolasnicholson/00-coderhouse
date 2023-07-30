import CartWidget from "../CartWidget/CartWidget"
import NavBar from "../NavBar/NavBar"
import logo from "./assets/logo.svg"

const Header = () => {
    return (
        <header className='px-12 py-9 flex justify-between items-center'>
            <img src={logo} alt="logo" />
            <NavBar />
            <CartWidget />
        </header>
    )
}

export default Header
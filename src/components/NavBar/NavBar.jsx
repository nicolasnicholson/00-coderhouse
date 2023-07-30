const NavBar = () => {
    return(
        <nav className="list-none flex gap-8 [&>li]:uppercase [&>li]:font-semibold [&>li]:text-[#373737]">
            <li><a href="#">Home</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">Accessories</a></li>
        </nav>
    )
}

export default NavBar
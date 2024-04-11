import Logo from "./Logo";
import NavBar from "./NavBar";


function Header() {
    return <div className="bg-blue header">
        <Logo/>
        <NavBar/>
    </div>
}

export default Header;
import React from "react";

const Navbar = () => {
    let imagUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return (
        <nav>
            <div>
                <div>
                    <img src={imagUrl} alt="pokeapi-logo" className="navbar-image" />
                </div>
                </div>
        </nav>
    )
}

export default Navbar;
import React from 'react';

function Navbar() {
  return (
    <div className="nav-bar">
      <a className="menu-bar"><i className="fa-solid fa-bars"></i></a>
      <a className="gameswap">Gameswap</a>
      <a className="icon"> <img src="img\Vector.png" alt="Logo"></a>
      <input className="search-bar" type="text" placeholder="Search" />
      <i className="fa-solid fa-magnifying-glass search-icon"></i>
      <a className="hotgame">Hot Games</a>
      <a className="sign-up" href="sign-up.html">Sign up</a>
      <a className="log-in" href="log-in.html">Log in</a>
    </div>
  );
}

export default Navbar;

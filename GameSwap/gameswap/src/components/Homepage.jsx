import "/style.css";
import { Link } from "react-router-dom";


const Homepage = () => {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>GameSwap</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <link rel="stylesheet" href="style.css" />
      <div className="nav-bar">
        <div className="dropdown-menu">
          <button className="dropbtn"><i className="fa-solid fa-bars" /></button>
          <div className="dropdown-content">
            <a href="main.html">Home</a>
            <a href="#">Create Auction</a>
            <a href="contact-us.html">Contact us</a>
            <a href="#">Log out</a>
          </div>
        </div>
        <a className="gameswap">Gameswap</a>
        <a className="icon"><img src="img\Vector.png" /></a>
        <input className="search-bar" type="text" placeholder="Search" />
        <i className="fa-solid fa-magnifying-glass search-icon" />
        <a className="hotgame" href="hot-games.html">Hot Games</a>
        <div className="signin_box">
          <Link className="links" to="/signup"> Sign up
          </Link>
        </div>
        <a className="log-in" href="log-in.html">Log in</a>
      </div>
      <section className="game-section">
        <div className="container">
          <div className="box">
            <img className="super-mario" src="img\super-mario-bros-wonder.webp" />
            <h1>Super Mario Wonder</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iure eveniet sequi blanditiis corporis incidunt quo labore! Ad enim laboriosam doloribus adipisci earum. Repellendus, in deserunt. Asperiores fuga odit dolore doloribus? Nobis, nihil corporis tempore cum saepe nemo maxime veritatis vel cumque, alias voluptatum accusantium aliquid nam molestias, vero ad!</p>
          </div>
          <div className="box">
            <img className="ufc3" src="img\ufc-game.jpg" />
            <h1>UFC 3</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iure eveniet sequi blanditiis corporis incidunt quo labore! Ad enim laboriosam doloribus adipisci earum. Repellendus, in deserunt. Asperiores fuga odit dolore doloribus? Nobis, nihil corporis tempore cum saepe nemo maxime veritatis vel cumque, alias voluptatum accusantium aliquid nam molestias, vero ad!</p>
          </div>
          <div className="box">
            <img className="left4dead" src="img\Left4Dead2.jpg" />
            <h1>Left 4 dead</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iure eveniet sequi blanditiis corporis incidunt quo labore! Ad enim laboriosam doloribus adipisci earum. Repellendus, in deserunt. Asperiores fuga odit dolore doloribus? Nobis, nihil corporis tempore cum saepe nemo maxime veritatis vel cumque, alias voluptatum accusantium aliquid nam molestias, vero ad!</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage
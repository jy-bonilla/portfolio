import "./topbar.scss"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (

        <nav className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="logo">
                    <a href="#intro">
                        <img src="/assets/mainLogo2.png" alt="" />
                    </a>
                </div>
                <ul className="primary-navigation">
                    <li>
                        <a href="#about">about</a>
                    </li>
                    <li>
                        <a href="#blog">blog</a>
                    </li>
                    <li>
                        <a href="#portfolio">portfolio</a>
                    </li>
                    <li>
                        <a href="#testimonials">testimonials</a>
                    </li>
                    <li>
                        <a href="#contact">contact</a>
                    </li>
                </ul>
                <div className="itemContainer">
                    <div className="socialMedia">
                        <a href="https://twitter.com/bonillacodes/">
                            <i className="twitterIcon" class="fa-brands fa-x-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/bonillacodes/">
                            <i className="linkedInIcon" class="fa-brands fa-linkedin-in"></i>
                        </a>
                    </div>
                    <div className="right">
                        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                            <span className="line1"></span>
                            <span className="line2"></span>
                            <span className="line3"></span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
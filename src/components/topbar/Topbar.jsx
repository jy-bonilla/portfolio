import "./topbar.scss"
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (

        <nav className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="logo">
                    <a href="#intro">
                        bonillaCodes.
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
                    <EmailIcon className="emailIcon" />
                    <TwitterIcon className="twitterIcon" />
                    <LinkedInIcon className="linkedInIcon" />
                    <div className="right">
                        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                            <span className="line1"></span>
                            <span className="line2"></span>
                            <span className="line3"></span>
                        </div>
                    </div>
                </div>
            </div>















            {/* <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        bonillaCodes.
                    </a>
                    <a href="#about">about</a>
                    <a href="#portfolio">portfolio</a>
                    <a href="#works">works</a>
                    <a href="#testimonials">testimonials</a>
                    <a href="#contact">contact</a>
                    <div className="itemContainer">
                        <PersonIcon className="icon" />
                    </div>
                    <div className="itemContainer">
                        <EmailIcon className="icon" />
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div> */}
        </nav>
    );
}
import "./menu.scss";
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#about">about</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#blog">blog</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#portfolio">portfolio</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#testimonials">testimonials</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">contact</a>
                </li>
                <li className="socialIcons">
                    <EmailIcon style={{ fontSize: "45px" }} className="emailIcon" />
                    <TwitterIcon style={{ fontSize: "45px" }} className="twitterIcon" />
                    <LinkedInIcon style={{ fontSize: "45px" }} className="linkedInIcon" />
                </li>
            </ul>
        </div>
    );
}
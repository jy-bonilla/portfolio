import "./topbar.scss"
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar" + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo"> genius.</a>
                    <div className="itemContainer">
                        <PersonIcon className="icon" />
                        <span> 540.398.1266</span>
                    </div>
                    <div className="itemContainer">
                        <EmailIcon className="icon" />
                        <span>jy.bonillagil@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line 1"></span>
                        <span className="line 2"></span>
                        <span className="line 3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

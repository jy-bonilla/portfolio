import "./intro.scss";
import Typed from 'typed.js';
import { useEffect, useRef } from "react";


export default function Intro() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Developer", "UI/UX Designer"],
            startDelay: 200,
            typeSpeed: 70,
            backSpeed: 55,
            backDelay: 500,
            loop: true,
            showCursor: true,

        });
        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/joseBonillaBlank.png" alt="smiling man" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, I'm</h2>
                    <h1>José Bonilla</h1>
                    <h3>Freelance {' '}
                        <span ref={el}></span>
                    </h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="down arrow" />
                </a>
            </div>

        </div>
    )
}

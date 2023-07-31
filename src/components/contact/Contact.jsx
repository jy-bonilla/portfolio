import { useState } from "react";
import "./contact.scss";


export default function Contact() {

    const [message, setMessage] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className="contact" id="contact">
            <div className="right">
                <h2>Let's Connect</h2>
                <p>If you consider me a good fit for an <span className="connect">open position</span>, or if you'd like
                    to discuss a freelance project, else if you want to <span className="connect">say hello</span>, feel free
                    to cotact me on social media, or send me a message!
                </p>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="name" />
                    <input type="text" placeholder="email" />
                    <textarea placeholder="message"></textarea>
                    <button type="submit">Send Message</button>
                    {message && <span>Thanks, I will reply ASAP</span>}
                </form>
            </div>
            <footer>
                <ul className="primary-navigation">
                    <span>
                        <a href="#intro">© bonillaCodes</a>
                    </span>
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
            </footer>
        </div>
    )
}

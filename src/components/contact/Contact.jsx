import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contact.scss";


export default function Contact() {

    const [message, setMessage] = useState(false)
    const form = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)

        emailjs.sendForm('service_pdql6g9', 'template_82wmmio', form.current, 'CfQpMeCgw_GOmzrx_')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <div className="contact" id="contact">
            <div className="right">
                <h2>Let's Connect</h2>
                <p>If you consider me a good fit for an <span className="connect">open position</span>, or if you'd like
                    to discuss a freelance project, else if you want to <span className="connect">say hello</span>, feel free
                    to cotact me on social media, or send me a message!
                </p>
                <form ref={form} onSubmit={handleSubmit}>
                    <label className="contactLabel">Name</label>
                    <input type="text" name="user_name" required />
                    <label className="contactLabel">Email</label>
                    <input type="text" name="user_email" required />
                    <label className="contactLabel">Message</label>
                    <textarea name="message"></textarea>
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
                </ul>
            </footer>
        </div>
    )
}

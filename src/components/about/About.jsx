import './about.scss';


export default function About() {
    return (
        <div className="about" id="about" >
            <div className="aboutDescr">
                <div className="textDesc">
                    <h2>about. </h2>
                    <h3>
                        I'm a software developer based in Northern Virginia.
                    </h3>
                    <p>
                        I enjoy turning complex problems into simple, beautiful intuitive and accessible
                        solutions through the implementation of various technologies. When I'm not working on my
                        coding craft, you'll find me cooking, lost in a Sci-Fi novel or tinkering away with some
                        electronic device the garage.
                    </p>
                </div>
                <div className="image">
                    <img src="assets/joseBonillaBlank.png" alt="smiling man" />
                </div>
            </div>
            <hr />
            <div className="techIcons">
                <h4>Technologies I work with</h4>
                <ul className="technologies-list">
                    <li>
                        <i class="fa-brands fa-html5"></i>
                    </li>
                    <li>
                        <i class="fa-brands fa-css3-alt"></i>
                    </li>
                    <li>
                        <i class="fa-brands fa-square-js"></i>
                    </li>
                    <li>
                        <i class="fa-brands fa-java"></i>
                    </li>
                    <li>
                        <i class="fa-brands fa-python"></i>
                    </li>
                    <li>
                        <i class="fa-brands fa-react"></i>
                    </li>
                    <li>
                        <i class="fa-brands fa-node-js"></i>
                    </li>
                    <li>
                        <i class="fa-brands fa-square-github"></i>
                    </li>
                    <li>

                    </li>
                    <li>

                    </li>
                    <li>

                    </li>
                </ul>
            </div>
        </div>
    )
}



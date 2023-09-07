import './about.scss';


export default function About() {
    return (
        <div className="about" id="about" >
            <div className="aboutDescr">
                <h2>about. </h2>
                <h3>
                    I'm a software developer based in Northern Virginia.
                </h3>
                <p>
                    I enjoy turning complex problems into simple, beautiful intuitive and accessible
                    solutions through the implementation of various technologies. When I'm not working on my
                    coding craft, you'll find me cooking, lost in a Sci-Fi novel or tinkering away with some
                    electronic device in my garage.
                </p>
            </div>
            <div className="image">
                <img src="assets/joseBonillaBlank.png" alt="smiling man" />
            </div>
        </div>
    )
}



import IMG from '../assets/Detective.png';

const About = () => {
    return (
        <div id="about" className="about">
            <h1 className="about-heading">About Me</h1>
            <div className="about-info">
                <p className="about-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi suscipit quidem ullam voluptates repellendus explicabo placeat, expedita ratione saepe eaque dolorum sed deleniti, odit numquam, nostrum tempore quos corrupti rem.</p>
                <div className="about-img">
                    <div className="about-img-wrapper">
                        <img src={IMG} alt="Detective" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
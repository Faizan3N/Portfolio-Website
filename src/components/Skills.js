import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills = [
    { name: "React.js", percent: 78 },
    { name: "Node.js", percent: 76 },
    { name: "MongoDB", percent: 75 },
    { name: "Express.js", percent: 77 },
    { name: "Tailwind CSS", percent: 74 },
    { name: "Python", percent: 79 },
    { name: "Redux", percent: 73 },
    { name: "Django", percent: 72 },
    { name: "MySQL", percent: 75 },
  ];

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Full Stack Developer proficient in the MERN Stack, Python, and modern web technologies.<br></br>Passionate about building scalable, user-friendly applications and AI-powered products.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            {skills.map((skill, index) => (
                              <div className="item" key={index}>
                                  <div
                                    className="skill-meter"
                                    style={{ "--value": skill.percent }}
                                    aria-label={`${skill.name} proficiency ${skill.percent} percent`}
                                  >
                                    <span>{skill.percent}%</span>
                                  </div>
                                  <h5>{skill.name}</h5>
                              </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  )
}

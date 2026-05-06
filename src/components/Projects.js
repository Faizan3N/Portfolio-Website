import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.PNG";
import projImg2 from "../assets/img/project-img2.png";
import portfolioProjectImg from "../assets/img/portfolio-project.png";
import restaurantWebsiteImg from "../assets/img/restaurant-website.png";
import aiBrainTumorDiagnosisImg from "../assets/img/ai-brain-tumor-diagnosis.png";
import aiBrain1 from "../assets/img/ai-brain-gallery/ai-brain-1.png";
import aiBrain2 from "../assets/img/ai-brain-gallery/ai-brain-2.png";
import aiBrain4 from "../assets/img/ai-brain-gallery/ai-brain-4.png";
import aiBrain5 from "../assets/img/ai-brain-gallery/ai-brain-5.png";
import aiBrain6 from "../assets/img/ai-brain-gallery/ai-brain-6.png";
import fakeNewsDetectorImg from "../assets/img/fake-news-detector.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const fullStackProjects = [
    {
      title: "FitLab Gym Project",
      description: "Full-stack fitness management system — React.js, Node.js, Express, MongoDB. Responsive UI with secure auth.",
      imgUrl: projImg1,
      link: "https://github.com/Faizan3N/FitLab-Gym-Project"
    },
    {
      title: "Restaurant Website",
      description: "Responsive restaurant website with interactive menu, styled layout, and mobile-friendly design.",
      imgUrl: restaurantWebsiteImg,
      link: "https://github.com/Faizan3N/Restaurant-Website"
    },
    {
      title: "Portfolio Website (React)",
      description: "Modern responsive portfolio built with React.js and Chakra UI. Smooth animations, validated contact forms.",
      imgUrl: portfolioProjectImg,
      link: "https://github.com/Faizan3N/Portfolio-Website-Using-ReactJS"
    },
  ];

  const aiMlProjects = [
    {
      title: "AI Brain Tumor Diagnosis",
      description: "VGG16 transfer learning for MRI brain tumor classification. LIME & XAI explainability, PDF reports, Django UI. Final Year Project.",
      imgUrl: aiBrainTumorDiagnosisImg,
      images: [aiBrain1, aiBrain2, aiBrain4, aiBrain5, aiBrain6],
      reportLinks: [
        { label: "Report 2", url: "/reports/brain-mri-diagnostic-report-2.pdf" },
        { label: "Report 3", url: "/reports/brain-mri-diagnostic-report-3.pdf" },
        { label: "Report 4", url: "/reports/brain-mri-diagnostic-report-4.pdf" },
        { label: "Report 5", url: "/reports/brain-mri-diagnostic-report-5.pdf" },
        { label: "Report 6", url: "/reports/brain-mri-diagnostic-report-6.pdf" },
      ],
      link: "https://github.com/Faizan3N/AI-Brain-Tumor-Diagnosis-System"
    },
    {
      title: "Fake News Detector (ML)",
      description: "Fake News Detection using Python, Scikit-learn, Streamlit. TF-IDF feature extraction, Logistic Regression, Naive Bayes.",
      imgUrl: fakeNewsDetectorImg,
      link: "https://github.com/Faizan3N/Fake-News-Detector-Using-ML"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>34 public repositories on GitHub with 414 contributions in the last year. Covering Full Stack web apps and AI/ML systems built with real-world use cases.</p>
                <div id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <h3 className="project-section-title">Full Stack</h3>
                  <Row>
                    {fullStackProjects.map((project, index) => (
                      <ProjectCard key={index} {...project} colProps={{ xs: 12, sm: 6, lg: 4 }} />
                    ))}
                  </Row>

                  <h3 className="project-section-title">AI / ML</h3>
                  <Row>
                    {aiMlProjects.map((project, index) => (
                      <ProjectCard key={index} {...project} colProps={{ xs: 12, sm: 6, lg: 6 }} />
                    ))}
                  </Row>
                </div>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  )
}

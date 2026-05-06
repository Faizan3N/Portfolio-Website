import { Col, Carousel } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  images = [],
  link,
  reportLinks = [],
  colProps = { xs: 12, sm: 6, md: 4 },
}) => {
  const hasGallery = images.length > 0;

  return (
    <Col {...colProps}>
      <div className="proj-imgbx">
        {hasGallery ? (
          <Carousel
            className="project-carousel"
            interval={3000}
            pause="hover"
            indicators={images.length > 1}
            controls={images.length > 1}
          >
            {images.map((imageSrc, index) => (
              <Carousel.Item key={`${title}-slide-${index}`}>
                <img src={imageSrc} alt={`${title} screenshot ${index + 1}`} />
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <img src={imgUrl} alt={title} />
        )}
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {(link || reportLinks.length > 0) && (
            <div style={{marginTop: '10px'}}>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: '#fff',
                    background: 'rgba(255,255,255,0.2)',
                    border: '1px solid rgba(255,255,255,0.5)',
                    padding: '5px 14px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    textDecoration: 'none',
                    display: 'inline-block',
                    marginTop: '6px',
                    marginRight: '8px'
                  }}
                >
                  View on GitHub →
                </a>
              )}
              {reportLinks.map((report, index) => (
                <a
                  key={`${title}-report-${index}`}
                  href={report.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: '#fff',
                    background: 'rgba(255,255,255,0.2)',
                    border: '1px solid rgba(255,255,255,0.5)',
                    padding: '5px 14px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    textDecoration: 'none',
                    display: 'inline-block',
                    marginTop: '6px',
                    marginRight: '8px'
                  }}
                >
                  {report.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </Col>
  )
}

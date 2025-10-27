import image from "../../assets/images/image.png";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import "../../styles/loginpage/slideshow.css"
import { useEffect, useState, useCallback } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap"; 

function Slideshow() {
  const dataSlides = [
    { image:image, title: "title", link:"https://www.google.com/", desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In culpa, natus beatae odit ratione expedita iusto voluptatem est, accusantium libero aut optio reiciendis qui aperiam cum a atque sapiente dolorem." },
    { image: image1, title: "title1", link:"https://www.google.com/", desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In culpa, natus beatae odit ratione expedita iusto voluptatem est, accusantium libero aut optio reiciendis qui aperiam cum a atque sapiente dolorem." },
    { image: image2, title: "title2", link:"https://www.google.com/", desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In culpa, natus beatae odit ratione expedita iusto voluptatem est, accusantium libero aut optio reiciendis qui aperiam cum a atque sapiente dolorem." },
    { image: image3, title: "title3", link:"https://www.google.com/", desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In culpa, natus beatae odit ratione expedita iusto voluptatem est, accusantium libero aut optio reiciendis qui aperiam cum a atque sapiente dolorem." }
  ];

  const [count, setCount] = useState(0);
  const [style, setStyle] = useState("translateX(0%)");
  const [opacity, setOpacity] = useState("1");
  const slideLength = dataSlides.length;

  const transitionSlide = useCallback((newCount, direction = 'next') => {

    setOpacity("0");
    const outDirection = direction === 'next' ? '-100%' : '100%';
    setStyle(`translateX(${outDirection})`);
    
    setTimeout(() => {
      
      setCount(newCount); 
      const inDirection = direction === 'next' ? '100%' : '-100%';
      setStyle(`translateX(${inDirection})`); 
      
    }, 500); 

    setTimeout(() => {
      setOpacity("1");
      setStyle("translateX(0%)");
    }, 550);
  }, []);

  const goToNext = useCallback(() => {
    const newCount = (count + 1) % slideLength;
    transitionSlide(newCount, 'next');
  }, [count, slideLength, transitionSlide]);

  const goToPrev = useCallback(() => {
    const newCount = (count - 1 + slideLength) % slideLength;
    transitionSlide(newCount, 'prev');
  }, [count, slideLength, transitionSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [goToNext]); 

  return (
    <Container
      className="overflow-hidden d-flex justify-content-center align-items-center rounded p-2 p-md-5 slideshow-container"
      style={{ position: 'relative' }}
    >
      <Button 
        variant="secondary" 
        onClick={goToPrev} 
        className="prev-btn"
        style={{ position: 'absolute', left: '10px', zIndex: 10, top: '50%', transform: 'translateY(-50%)' }}
      >
        &#9664;
      </Button>

      <Card
        className="border-0"
        style={{
          transform: style,
          opacity: opacity,
          transition: "transform 500ms, opacity 500ms",
        }}
      >
        <Card.Body>
          <Row>
            <Col md={12} lg={8} className="d-flex justify-content-center align-items-center">
              <img
                src={dataSlides[count].image}
                className="h-auto rounded responsive-img-slideshow"
                alt={dataSlides[count].title}
              />
            </Col>
            <Col md={12} lg={4} className="d-flex flex-column justify-content-center align-items-center p-2 description-text text-center">
              <h2>{dataSlides[count].title}</h2>
              <p>{dataSlides[count].desc}</p>
              <button 
                style={{backgroundColor: "var(--color-9)" , color: "var(--color-white)"}}
                className="rounded-4 ps-3 pe-3 pt-1 pb-1"
              >
                <a 
                  href={dataSlides[count].link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  Learn More
                </a>
              </button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Button 
        variant="secondary" 
        onClick={goToNext} 
        className="next-btn"
        style={{ position: 'absolute', right: '10px', zIndex: 10, top: '50%', transform: 'translateY(-50%)' }}
      >
        &#9654;
      </Button>

    </Container>
  );
}

export default Slideshow;
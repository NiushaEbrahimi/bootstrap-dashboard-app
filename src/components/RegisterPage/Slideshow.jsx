import image from "../../assets/images/image.png";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import "../../styles/loginpage/slideshow.css"
import { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

function Slideshow() {
  const dataSlides = [
    { image:image, title: "title", desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In culpa, natus beatae odit ratione expedita iusto voluptatem est, accusantium libero aut optio reiciendis qui aperiam cum a atque sapiente dolorem." },
    { image: image1, title: "title1",desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In culpa, natus beatae odit ratione expedita iusto voluptatem est, accusantium libero aut optio reiciendis qui aperiam cum a atque sapiente dolorem." },
    { image: image2, title: "title2",desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In culpa, natus beatae odit ratione expedita iusto voluptatem est, accusantium libero aut optio reiciendis qui aperiam cum a atque sapiente dolorem." },
    { image: image3, title: "title3", desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In culpa, natus beatae odit ratione expedita iusto voluptatem est, accusantium libero aut optio reiciendis qui aperiam cum a atque sapiente dolorem." }
  ];

  const [count, setCount] = useState(0);
  const [style, setStyle] = useState("translateX(0%)");
  const [opacity, setOpacity] = useState("1");

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity("0");
      setStyle("translateX(100%)");
      setTimeout(() => {
        setCount(prev => (prev + 1) % dataSlides.length);
        setStyle("translateX(-100%)");
      }, 500);
      setTimeout(() => {
        setOpacity("1");
        setStyle("translateX(0%)");
      }, 800);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container
      className="overflow-hidden d-flex justify-content-center align-items-center rounded p-2 p-md-5 slideshow-container"
    >
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
            <Col md={12} lg={4} className="d-flex flex-column justify-content-center p-2 description-text">
              <h2>{dataSlides[count].title}</h2>
              <p>{dataSlides[count].desc}</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Slideshow;
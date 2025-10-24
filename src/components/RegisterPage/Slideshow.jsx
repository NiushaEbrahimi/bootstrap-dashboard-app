// import "../../styles/loginpage/slideshow.css"
import image from "../../assets/images/image.jpeg";
import image1 from "../../assets/images/image1.jpeg";
import image2 from "../../assets/images/image2.jpeg";
import { useEffect, useState } from "react";
import {Card,Container,Row,Col} from "react-bootstrap"

function Slideshow(){
    const dataSlides =
     [{
        "image":image,"title":"title", "desc":"this is the description"
    },{
        "image":image1,"title":"title1", "desc":"this is the description1"
    },{
        "image":image2,"title":"title2", "desc":"this is the description2"
    }]
    const [count,setCount] = useState(0)
    const [style , setStyle] = useState("translateX(0%")
    const [opacity , setOpacity] = useState("1")
    useEffect(() => {
        const interval = setInterval(() => {
            setOpacity("0")
            setStyle("translateX(150%)")
            setTimeout(()=>{
                setCount(prev => (prev + 1) % dataSlides.length);
                setStyle("translateX(-150%)")
            },500)
            setTimeout(()=>{
                setOpacity("1")
                setStyle("translateX(0%)")
            },800)
        }, 5000); 
        
        return () => clearInterval(interval);
    }, []);
    clearInterval()
    return(
        <Container className="overflow-hidden shadow d-flex justify-content-center align-items-center" style={{height:"90vh", minWidth:"50vw", backgroundColor:"lightgrey"}}>
            <Card 
                className="d-felx item"
                style={{transform: style, opacity : opacity , transitionDuration : "500ms"}}
            >
                <Card.Body>
                    <Row>
                        <Col md={12} lg={6} className="img-container">
                            <img 
                                className="w-100 h-auto rounded"
                                src={dataSlides[count].image}
                            />
                        </Col>
                        <Col md={12} lg={6} className="description">
                            <h2>{dataSlides[count].title}</h2>
                            <p>{dataSlides[count].desc}</p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
};
export default Slideshow;
import "../../styles/DashboardPage/chart.css"
import { Container } from "react-bootstrap";

function MessageCounts({statusCount}){
    console.log(statusCount)
    return(
        <Container className="p-1 border rounded h-100 d-flex justify-content-center align-items-center">
            <div className="chart-container">
                <div className="bar-chart">
                        {Object.values(statusCount).map((data) => (
                            // TODO: put a interval to make this animation
                            <div style={{height:`${data.count*30}px`}} className={`${data.css_class_name} bar`}></div>
                        ))}
                </div>
                <div style={{backgroundColor:"var(--color-2)"}}></div>
                <div className="names d-flex">
                    {Object.keys(statusCount).map((status) => (
                           <p className="chart-title">{status}</p> 
                        ))}
                </div>
            </div>
        </Container>
    )
}
export default MessageCounts;
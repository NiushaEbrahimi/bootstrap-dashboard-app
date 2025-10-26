import "../../styles/DashboardPage/chart.css"
import { Container } from "react-bootstrap";

function MessageCounts({statusCount}){
    console.log(statusCount)
    return(
        <Container className="p-1 border rounded">
            <div className="chart-container">
                <div className="bar-chart">
                        {Object.entries(statusCount).map(([status, data]) => (
                            <div style={{height:`${data.count*20}px`}} className={`${status} bar`}></div>
                        ))}
                </div>
                <div className="bg-dark"></div>
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
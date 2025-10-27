import "../../styles/DashboardPage/chart.css"
import { Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";

function MessageCounts({statusCount}){
    const [animatedHeights, setAnimatedHeights] = useState({});

    useEffect(() => {
        const targetHeights = {};
        Object.keys(statusCount).forEach(key => {
            targetHeights[key] = statusCount[key].count * 30; 
        });

        const timer = setTimeout(() => {
            setAnimatedHeights(targetHeights);
        }, 50); 

        return () => clearTimeout(timer);
    }, [statusCount]); 

    const getBarHeight = (statusKey, defaultCount) => {
        return animatedHeights[statusKey] || (defaultCount * 0); 
    };

    const maxCount = Math.max(...Object.values(statusCount).map(data => data.count), 1);
    const maxHeight = 30 * maxCount * 1.1;

    return(
        <Container 
            className="p-1 border rounded h-100 d-flex justify-content-center align-items-center"
            style={{ minHeight: '200px' }}
        >
            <div className="chart-container" style={{ height: `${maxHeight}px` }}>
                <div className="bar-chart">
                    {Object.keys(statusCount).map((key) => {
                        const data = statusCount[key];
                        const height = getBarHeight(key, 0); 

                        return (
                            <div 
                                key={key}
                                style={{ height: `${height}px` }} 
                                className={`${data.css_class_name} bar shadow-sm`}
                            ></div>
                        )
                    })}
                </div>
                <div style={{backgroundColor:"var(--color-2)"}}></div>
                <div className="names d-flex">
                    {Object.keys(statusCount).map((status) => (
                        <p key={status} className="chart-title">{status}</p> 
                    ))}
                </div>
            </div>
        </Container>
    )
}
export default MessageCounts;
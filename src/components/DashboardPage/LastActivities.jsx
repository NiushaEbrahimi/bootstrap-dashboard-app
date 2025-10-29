import { useEffect, useState } from "react";
import dayjs from "dayjs";
import jalaliday from 'jalaliday/dayjs'
import { Container} from "react-bootstrap";

dayjs.extend(jalaliday);

function LastActivities() {
  
  const [recentActivities, setRecentActivities] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data/activitys.json");
        const data = await res.json();
        setRecentActivities(data.slice(-3));
      } catch (e) {
        console.log("Error fetching activities:", e);
      }
    };
    fetchData();
  }, []);

  const now = dayjs();
  
  const calculateTime = (activity) => {
    
    const goalDate = dayjs(activity)
    const minuteDiff = now.diff(goalDate,"minute") 
    const hourDiff = now.diff(goalDate,"hour")
    const dayDiff = now.diff(goalDate,"day") 
    const monthDiff = now.diff(goalDate,"month")

    if(minuteDiff <60){return(`${minuteDiff} minutes ago`)} 
    if(hourDiff<24){return(`${hourDiff} hours ago`)}
    if(dayDiff<30){return(`${dayDiff} days ago`)}
    if(monthDiff!="0" && monthDiff<12){return(`${now.diff(goalDate,"month")} month ago`)}

  };

  return (
    <div 
    
      className="activity-chart-container
      p-3 pt-1 ms-1 h-100 justify-content-center align-items-center
      w-100 d-flex gap-2 flex-column"
    >
      {recentActivities.slice().reverse().map((activity) => (
        <Container
          className="rounded border p-1"
          key={activity.id}
        >
          <p className="activity-title m-0" style={{direction:"rtl"}}>{activity.title}</p>
          <p className="activity-date m-0">{calculateTime(activity.date)}</p>
        </Container>
      ))}
    </div>
  );
}

export default LastActivities;

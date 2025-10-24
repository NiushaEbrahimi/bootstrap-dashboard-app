import { useEffect, useState } from "react";
import "../../styles/DashboardPage/activityChart,.css"

function ActivityChart() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data/activitys.json");
        const data = await res.json();
        setActivities(data);
      } catch (e) {
        console.log("Error fetching activities:", e);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="activity-chart-container">
      {activities.map((acti) => (
        <div key={acti.id}>
          <span></span>
          <span>{acti.title}</span>
        </div>
      ))}
    </div>
  );
}

export default ActivityChart;

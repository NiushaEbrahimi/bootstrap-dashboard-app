import { Container, Row, Col} from "react-bootstrap";
import LastActivities from "./LsatActivities"
import Unread from "./Unread";
import MessageCounts from "./MessageCounts"
function ActivityChart({statusCount}) { 
  return (
    <>
      <Row className="p-3">
        <Col>
          <MessageCounts statusCount={statusCount}/>        
        </Col>
        <Col>
          <LastActivities/>
        </Col>
      </Row>
    </>
  );
}

export default ActivityChart;

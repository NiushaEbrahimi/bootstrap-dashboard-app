import { Container, Row, Col} from "react-bootstrap";
import LastActivities from "./LastActivities"
import MessageCounts from "./MessageCounts"

function ActivityChart({statusCount}) { 
  return (
    <Container fluid className="p-2 h-100 overflow-hidden">
      <Row className="g-3 h-100 m-0">
        <Col className="m-0 p-0 h-100">
          <MessageCounts statusCount={statusCount}/>        
        </Col>
        <Col className="m-0 p-0 h-100 w-100">
          <LastActivities/>
        </Col>
      </Row>
    </Container>
  );
}

export default ActivityChart;

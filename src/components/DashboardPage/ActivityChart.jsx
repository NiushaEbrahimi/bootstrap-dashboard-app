import { Container, Row, Col} from "react-bootstrap";
import LastActivities from "./LastActivities"
import MessageCounts from "./MessageCounts"

function ActivityChart({statusCount}) { 
  // TODO: this is not responsive
  return (
    <Container fluid className="p-2 h-100 overflow-hidden d-flex flex-column">
      <Row  className="h-100 m-0 ">
        <Col md={8} lg={8} className="m-0 p-0 h-100 ">
          <MessageCounts statusCount={statusCount}/>        
        </Col>
        <Col md={4} lg={4} className="m-0 p-0 h-100 overflow-hidden">
          <LastActivities/>
        </Col>
      </Row>
    </Container>
  );
}

export default ActivityChart;

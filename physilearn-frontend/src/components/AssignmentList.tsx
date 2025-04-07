import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import "../components-css/AssignmentList.css";

function AssignmentList() {
    return (
        <ListGroup as="ul" id="assignment-list-group">
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
                id="assignment-item"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Assignment #1</div>
                    CSE2201 - Internet Computing I
                </div>
                <Badge bg="primary" pill>
                    April 14th 2024
                </Badge>
            </ListGroup.Item>
        </ListGroup>
    );
}

export default AssignmentList;

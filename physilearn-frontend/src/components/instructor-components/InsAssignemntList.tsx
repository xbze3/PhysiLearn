import Badge from "react-bootstrap/Badge";
import Button from 'react-bootstrap/Button';
import ListGroup from "react-bootstrap/ListGroup";
import "../../components-css/AssignmentList.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useAssignment } from "../context/AssignmentContext";

interface Assignments {
    id: string;
    title: string;
    info: string;
    instructorId: string;
    classroomId: string;
    dueDate: string;
    dateAssigned: string;
}

function InsAssignmentList() {
    const [assignments, setAssignments] = useState<Assignments[]>([]);
    const { setSelectedAssignmentId } = useAssignment();

    useEffect(() => {
        const handleAssignmentRender = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8081/api/assignments"
                );
                setAssignments(response.data);
            } catch (err) {
                console.log(`Problem retrieving assignments: ${err}`);
            }
        };

        handleAssignmentRender();
    }, []);

    return (
        <>
            
            <ListGroup as="ul" id="assignment-list-group">
                <Button variant="primary" href ="/addassignment" style={{marginTop: '10px'}}>
                    Add Assignment
                </Button>
                {assignments.map((assignment) => (
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        id="assignment-item"
                        key={assignment.id}
                        onClick={() => setSelectedAssignmentId(assignment.id)}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{assignment.title}</div>
                            {assignment.classroomId} {/* Change this later */}
                        </div>
                        <Badge bg="primary" pill>
                            {assignment.dueDate}
                        </Badge>
                    </ListGroup.Item>
                ))}

                

            </ListGroup>

            
        </>
        
    );
}

export default InsAssignmentList;

import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import "../../../components-css/page-css/Submissions.css";
import InsNavBar from "../Ins-NavBar";

type Class = {
    id: string;
    name: string;
};

type Assignment = {
    id: string;
    title: string;
};

type Submission = {
    student: string;
    status: "Submitted" | "Not Submitted";
    date: string | null;
};

const dummyClasses: Class[] = [
    { id: "phy101", name: "PHY 101 - Mechanics" },
    { id: "cse2201", name: "CSE 2201 - Internet Computing I" },
];

const dummyAssignments: Record<string, Assignment[]> = {
    phy101: [
        { id: "a1", title: "Projectile Motion Assignment" },
        { id: "a2", title: "Free Fall Quiz" },
    ],
    cse2201: [
        { id: "a3", title: "HTML Basics Assignment" },
        { id: "a4", title: "JavaScript Quiz" },
    ],
};

const dummySubmissions: Record<string, Submission[]> = {
    a1: [
        { student: "Alice Johnson", status: "Submitted", date: "Apr 9" },
        { student: "Bob Lee", status: "Not Submitted", date: null },
    ],
    a3: [
        { student: "Sara Khan", status: "Submitted", date: "Apr 10" },
        { student: "James Ray", status: "Submitted", date: "Apr 10" },
        { student: "Liam Mendes", status: "Not Submitted", date: null },
    ],
};

function Submissions() {
    const [selectedClassId, setSelectedClassId] = useState<string>("");
    const [selectedAssignmentId, setSelectedAssignmentId] =
        useState<string>("");

    const assignments = dummyAssignments[selectedClassId] || [];
    const submissions = dummySubmissions[selectedAssignmentId] || [];

    return (
        <>
            <InsNavBar />
            <Container className="submissions-page-container mt-4">
                <h2>Submissions Dashboard</h2>
                <p className="text-muted">
                    View student submissions by class and assignment.
                </p>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="class-select">
                        Select a Class
                    </Form.Label>
                    <Form.Select
                        id="class-select"
                        onChange={(e) => {
                            setSelectedClassId(e.target.value);
                            setSelectedAssignmentId("");
                        }}
                        value={selectedClassId}
                    >
                        <option value="">-- Choose a class --</option>
                        {dummyClasses.map((cls) => (
                            <option key={cls.id} value={cls.id}>
                                {cls.name}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>

                {selectedClassId && (
                    <Form.Group className="mb-4">
                        <Form.Label htmlFor="assignment-select">
                            Select an Assignment
                        </Form.Label>
                        <Form.Select
                            id="assignment-select"
                            onChange={(e) =>
                                setSelectedAssignmentId(e.target.value)
                            }
                            value={selectedAssignmentId}
                        >
                            <option value="">-- Choose an assignment --</option>
                            {assignments.map((assn) => (
                                <option key={assn.id} value={assn.id}>
                                    {assn.title}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                )}

                {selectedAssignmentId && (
                    <>
                        <h4>Student Submissions</h4>
                        <ListGroup className="scrollable-section">
                            {submissions.length === 0 ? (
                                <ListGroup.Item>
                                    No submissions yet.
                                </ListGroup.Item>
                            ) : (
                                submissions.map((sub, index) => (
                                    <ListGroup.Item
                                        key={index}
                                        className="d-flex justify-content-between align-items-start"
                                    >
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">
                                                {sub.student}
                                            </div>
                                            {sub.status === "Submitted"
                                                ? `Submitted on ${sub.date}`
                                                : "No submission"}
                                        </div>
                                        <Badge
                                            bg={
                                                sub.status === "Submitted"
                                                    ? "success"
                                                    : "secondary"
                                            }
                                            pill
                                        >
                                            {sub.status}
                                        </Badge>
                                    </ListGroup.Item>
                                ))
                            )}
                        </ListGroup>
                    </>
                )}
            </Container>
        </>
    );
}

export default Submissions;

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NavBar from "../Ins-NavBar";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Collapse from "react-bootstrap/Collapse";
import "../../../components-css/page-css/InsCoursePage.css";

const dummyCourse = {
    title: "CSE 2201 - Internet Computing I",
    description:
        "Explore the fundamentals of web technologies and client-server architecture.",
    instructor: "Dr. Smith",
};

const dummyAnnouncements = [
    {
        id: 1,
        title: "Welcome to the course!",
        content: "Please read the syllabus.",
        date: "Apr 10",
    },
    {
        id: 2,
        title: "First Lecture Uploaded",
        content: "Week 1 lecture is now online.",
        date: "Apr 11",
    },
];

const dummyAssignments = [
    { id: 1, title: "Assignment #1", due: "Apr 14", status: "Not submitted" },
    { id: 2, title: "Assignment #2", due: "Apr 21", status: "Submitted" },
];

function InsCoursePage() {
    const navigate = useNavigate();
    const [showAnnForm, setShowAnnForm] = useState(false);
    const [showAssnForm, setShowAssnForm] = useState(false);

    return (
        <>
            <NavBar />
            <Container className="course-page-container mt-4">
                <Button
                    variant="outline-secondary"
                    onClick={() => navigate("/ins-courses")}
                    className="mb-3"
                >
                    ← Back to My Courses
                </Button>

                <h2 className="course-title">{dummyCourse.title}</h2>
                <p className="course-description">{dummyCourse.description}</p>
                <p className="course-instructor">
                    Instructor: {dummyCourse.instructor}
                </p>

                <div className="course-sections">
                    <div className="course-column">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <h4>Announcements</h4>
                            <Button
                                variant="primary"
                                size="sm"
                                onClick={() => setShowAnnForm(!showAnnForm)}
                            >
                                + New Announcement
                            </Button>
                        </div>
                        <Collapse in={showAnnForm}>
                            <div>
                                <Form className="mb-3">
                                    <Form.Group className="mb-2">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter announcement title"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-2">
                                        <Form.Label>Content</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            placeholder="Write your announcement..."
                                        />
                                    </Form.Group>
                                    <Button
                                        variant="success"
                                        type="submit"
                                        id="ins-post-button"
                                    >
                                        Post
                                    </Button>
                                </Form>
                            </div>
                        </Collapse>

                        <ListGroup className="scrollable-section">
                            {dummyAnnouncements.map((ann) => (
                                <ListGroup.Item key={ann.id}>
                                    <div className="fw-bold">{ann.title}</div>
                                    <small>{ann.date}</small>
                                    <p>{ann.content}</p>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </div>

                    <div className="course-column">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <h4>Assignments</h4>
                            <Button
                                variant="primary"
                                size="sm"
                                onClick={() => setShowAssnForm(!showAssnForm)}
                            >
                                + New Assignment
                            </Button>
                        </div>
                        <Collapse in={showAssnForm}>
                            <div>
                                <Form className="mb-3">
                                    <Form.Group className="mb-2">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter assignment title"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-2">
                                        <Form.Label>Due Date</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                    <Form.Group className="mb-2">
                                        <Form.Label>Details</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            placeholder="Describe the assignment..."
                                        />
                                    </Form.Group>
                                    <Button
                                        variant="success"
                                        type="submit"
                                        id="ins-upload-button"
                                    >
                                        Upload
                                    </Button>
                                </Form>
                            </div>
                        </Collapse>

                        <ListGroup className="scrollable-section">
                            {dummyAssignments.map((assn) => (
                                <ListGroup.Item
                                    key={assn.id}
                                    className="d-flex justify-content-between align-items-start"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">
                                            {assn.title}
                                        </div>
                                        Due: {assn.due}
                                    </div>
                                    <Badge
                                        bg={
                                            assn.status === "Submitted"
                                                ? "success"
                                                : "secondary"
                                        }
                                        pill
                                    >
                                        {assn.status}
                                    </Badge>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default InsCoursePage;

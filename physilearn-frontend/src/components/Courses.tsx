import "../components-css/Courses.css";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import Default_Class_LOGO from "../assets/default-class-logo.png";
import axios from "axios";
import { useEffect, useState } from "react";

interface Classrooms {
    id: string;
    code: string;
    name: string;
    instructorId: string;
    members: string[];
    createdAt: string;
}

function Courses() {
    const navigate = useNavigate();
    const [classrooms, setClassrooms] = useState<Classrooms[]>([]);

    useEffect(() => {
        const renderClassrooms = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8081/api/classrooms"
                );

                setClassrooms(response.data);
            } catch (err) {
                console.log(`Error rendering classrooms: ${err}`);
            }
        };

        renderClassrooms();
    }, []);

    return (
        <section id="content_section" className="content-container">
            <div className="cards-wrapper">
                {classrooms.map((classroom) => (
                    <Card
                        className="card-fixed-height"
                        onClick={() => navigate("/course-page")}
                        key={classroom.id}
                    >
                        <Card.Img
                            variant="top"
                            className="card-img-fixed"
                            src={Default_Class_LOGO}
                            alt="Classroom Logo"
                        />
                        <Card.Body className="d-flex flex-column flex-grow-1">
                            <Card.Title>
                                {classroom.code}:{classroom.name}
                            </Card.Title>
                            <Card.Text>{classroom.createdAt}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </section>
    );
}

export default Courses;

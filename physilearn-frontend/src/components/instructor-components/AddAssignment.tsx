import { useState } from 'react';
import axios from 'axios';
import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';



function AddAssignment() {

    const [id, setId] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [info, setInfo] = useState<string>("");
    const [instructorId, setInstructorId] = useState<string>("");
    const [classroomId, setClassroomId] = useState<string>("");
    const [dueDate, setDueDate] = useState<Date>(new Date());
    const [dateAssigned, setDateAssigned] = useState<Date>(new Date());
    const [error, setError] = useState<string>("");
    const navigate = useNavigate();

    const newAssignment = async () => {

        const token = localStorage.getItem("token");
        console.log(token);

    
    try {
        const response = await axios.post(
            'http://localhost:8081/api/assignments',
            {
              id,
              title,
              info,
              instructorId,
              classroomId,
              dueDate,
              dateAssigned,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          

        console.log(response.data);
        navigate("/insdashboard");


    }catch(error: unknown) {
        if (axios.isAxiosError(error)) {
            setError(error.response?.data || error.message);
        } else if (error instanceof Error) {
            setError(error.message);
        } else {
            setError("An unexpected error occurred.");
        }

    }


}

return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h3 className="text-center mb-4">Create Assignment</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicId">
            <Form.Label>Assignment ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your ID with anyone else.
            </Form.Text>
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Title of Assignment</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g., Assignment 1"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicInfo">
            <Form.Label>Assignment Information</Form.Label>
            <Form.Control
              type="text"
              placeholder="Notes for Assignment"
              value={info}
              onChange={(e) => setInfo(e.target.value)}
            />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicInstructorId">
            <Form.Label>Instructor ID</Form.Label>
            <Form.Control
              type="number"
              placeholder="e.g., 12045774"
              value={instructorId}
              onChange={(e) => setInstructorId(e.target.value)}
            />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicClassroomId">
            <Form.Label>Classroom ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g., Phy1101"
              value={classroomId}
              onChange={(e) => setClassroomId(e.target.value)}
            />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicDueDate">
            <Form.Label>Due Date</Form.Label>
            <Form.Control
              type="date"
              value={dueDate.toISOString().split("T")[0]}
              onChange={(e) => setDueDate(new Date(e.target.value))}
            />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicDateAssigned">
            <Form.Label>Date Assigned</Form.Label>
            <Form.Control
              type="date"
              value={dateAssigned.toISOString().split("T")[0]}
              onChange={(e) => setDateAssigned(new Date(e.target.value))}
            />
          </Form.Group>
  
          {error && <p className="text-danger">{error}</p>}
  
          <Button variant="primary" onClick={newAssignment} className="w-100">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
  
}

export default AddAssignment;
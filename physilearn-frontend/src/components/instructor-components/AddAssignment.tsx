import { useState } from 'react';
import axios from 'axios';
import { Form, Button } from "react-bootstrap";



function AddAssignment() {

    const [id, setId] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [info, setInfo] = useState<string>("");
    const [instructorId, setInstructorId] = useState<string>("");
    const [classroomId, setClassroomId] = useState<string>("");
    const [dueDate, setDueDate] = useState<Date>(new Date());
    const [dateAssigned, setDateAssigned] = useState<Date>(new Date());
    const [error, setError] = useState<string>("");

    const newAssignment = async () => {

    
    try {
        const response = await axios.post ('http://localhost/8081/api/assignments', {
            id,
            title,
            info,
            instructorId,
            classroomId,
            dueDate,
            dateAssigned

        });

        console.log(response.data);


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

    return(
        <Form>
            <Form.Group className="mb-3" controlId="formBasicId">
                <Form.Label>Assignment ID</Form.Label>
                <Form.Control type="text" placeholder="Enter Id" value= {id} onChange = {(e) => setId(e.target.value)}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default AddAssignment;
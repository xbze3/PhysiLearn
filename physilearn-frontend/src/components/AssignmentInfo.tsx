import "../components-css/AssignmentInfo.css";
import Button from "react-bootstrap/Button";
import { useAssignment } from "./context/AssignmentContext";
import axios from "axios";
import { useEffect, useState } from "react";

interface Assignments {
    id: string;
    title: string;
    info: string;
    instructorId: string;
    classroomId: string;
    dueDate: string;
    dateAssigned: string;
}

function AssignmentInfo() {
    const [selectedAssignmentInfo, setSelectedAssignmentInfo] =
        useState<Assignments | null>(null);

    const { selectedAssignmentId } = useAssignment();

    const renderAssignmentInfo = async () => {
        if (!selectedAssignmentId) return;

        try {
            const response = await axios.get(
                `http://localhost:8081/api/assignments/${selectedAssignmentId}`
            );
            setSelectedAssignmentInfo(response.data);
        } catch (err) {
            console.log(`Error rendering assignment information: ${err}`);
        }
    };

    useEffect(() => {
        renderAssignmentInfo();
    }, [selectedAssignmentId]);

    if (!selectedAssignmentInfo) {
        return (
            <div id="assignment-info-box">
                Select an assignment to view details.
            </div>
        );
    }

    return (
        <div id="assignment-info-box">
            <div id="assignment-info-div">
                <h1>
                    {selectedAssignmentInfo.classroomId}{" "}
                    {/* Replace with real classroom name later */}
                </h1>
                <h1>{selectedAssignmentInfo.title}</h1>

                <div id="open-and-due-div">
                    <p>
                        <strong>Open:</strong>{" "}
                        {new Date(
                            selectedAssignmentInfo.dateAssigned
                        ).toLocaleDateString()}
                    </p>
                    <p>
                        <strong>Due:</strong>{" "}
                        {new Date(
                            selectedAssignmentInfo.dueDate
                        ).toLocaleDateString()}
                    </p>
                </div>

                <div id="submission-status-div">
                    <h1>Submission Status</h1>

                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>Submission Status:</strong>
                                </td>
                                <td>No submissions have been made yet</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Grading Status:</strong>
                                </td>
                                <td>Not yet graded</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Time remaining:</strong>
                                </td>
                                <td>4 days</td>{" "}
                                {/* Calculate dynamically later */}
                            </tr>
                            <tr>
                                <td>
                                    <strong>Last Modified:</strong>
                                </td>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <Button variant="primary" id="add-submisson-button">
                    Add Submission
                </Button>
            </div>
        </div>
    );
}

export default AssignmentInfo;

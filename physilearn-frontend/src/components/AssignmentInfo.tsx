import "../components-css/AssignmentInfo.css";
import Button from "react-bootstrap/Button";

function AssignmentInfo() {
    return (
        <div id="assignment-info-box">
            <div id="assignment-info-div">
                <h1>CSE 2201 - Internet Computing I</h1>
                <h1>Assignment #1</h1>

                <div id="open-and-due-div">
                    <p>
                        <strong>Open:</strong> April 10th
                    </p>
                    <p>
                        <strong>Due:</strong> April 14th
                    </p>
                </div>

                <div id="submission-status-div">
                    <h1>Submission Status</h1>

                    <table>
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
                            <td>4 days</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Last Modified:</strong>
                            </td>
                            <td>-</td>
                        </tr>
                        {/* <tr>
                            <td>
                                <strong>Submission Comments:</strong>
                            </td>
                            <td>-</td>
                        </tr> */}
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

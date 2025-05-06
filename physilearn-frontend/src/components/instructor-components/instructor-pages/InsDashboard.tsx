import NavBar from "../../NavBar";
import AssignmentList from "../InsAssignemntList";
import AssignmentInfo from "../InsAssignmentInfo";
// import Footer from "../Footer";
import "../../../components-css/page-css/Dashboard.css";
import { AssignmentProvider } from "../../context/AssignmentContext";

function InsDashboard() {
    
    return (
        <>
            <NavBar />
            <section id="dashboard-split-section">
                <AssignmentProvider>
                    <AssignmentList />
                    <AssignmentInfo />
                </AssignmentProvider>
            </section>
            {/* <Footer /> */}
        </>
    );
}

export default InsDashboard;

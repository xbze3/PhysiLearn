import NavBar from "../NavBar";
import AssignmentList from "../AssignmentList";
import AssignmentInfo from "../AssignmentInfo";
// import Footer from "../Footer";
import "../../components-css/page-css/Dashboard.css";
import { AssignmentProvider } from "../context/AssignmentContext";

function Dashboard() {
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

export default Dashboard;

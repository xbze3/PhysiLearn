import NavBar from "../NavBar";
import AssignmentList from "../AssignmentList";
import AssignmentInfo from "../AssignmentInfo";
// import Footer from "../Footer";
import "../../components-css/page-css/Dashboard.css";

function Dashboard() {
    return (
        <>
            <NavBar />
            <section id="dashboard-split-section">
                <AssignmentList />
                <AssignmentInfo />
            </section>
            {/* <Footer /> */}
        </>
    );
}

export default Dashboard;

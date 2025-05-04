import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import CoursePage from "./components/pages/CoursePage";
import Dashboard from "./components/pages/Dashboard";
import MyCourses from "./components/pages/MyCourses";
import Login from "./components/pages/Login";
import Registration from "./components/pages/Registration";
import InsCoursePage from "./components/instructor-components/instructor-pages/InsCoursePage";
import InsMyCourse from "./components/instructor-components/instructor-pages/InsMyCourse";
import Submissions from "./components/instructor-components/instructor-pages/Submissions";

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/coursepage" element={<CoursePage />} />
            <Route path="/courses" element={<MyCourses />} />
            <Route path="/ins-course-page" element={<InsCoursePage />} />
            <Route path="/ins-courses" element={<InsMyCourse />} />
            <Route path="/submissions" element={<Submissions />} />
        </Routes>
    );
}

export default App;

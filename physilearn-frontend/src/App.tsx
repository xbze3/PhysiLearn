import "./App.css";
import { Routes, Route } from 'react-router-dom';
import CoursePage from "./components/pages/CoursePage";
import Dashboard from "./components/pages/Dashboard";
import MyCourses from "./components/pages/MyCourses";
import Login from "./components/pages/Login";
import Registration from "./components/pages/Registration";
import InsCoursePage from "./components/instructor-components/instructor-pages/InsCoursePage";
import InsMyCourse from "./components/instructor-components/instructor-pages/InsMyCourse";
import Submissions from "./components/instructor-components/instructor-pages/Submissions";
import InsDashboard from "./components/instructor-components/instructor-pages/InsDashboard";
import AddAssignment from "./components/instructor-components/AddAssignment";

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Login />} />
            <Route path="/Registration" element={<Registration />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/coursepage" element={<CoursePage />} />
            <Route path="/courses" element={<MyCourses />} />
            <Route path="/inscoursepage" element={<InsCoursePage />} />
            <Route path="/insmycourse" element={<InsMyCourse />} />
            <Route path="/submisions" element={<Submissions />} />
            <Route path="/insdashboard" element={<InsDashboard />} />
            <Route path="/addassignment" element={<AddAssignment />} />
        </Routes>

        
    );
}

export default App;

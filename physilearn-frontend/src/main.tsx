import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import CoursePage from "./components/pages/CoursePage.tsx";
import InsCoursePage from "./components/instructor-components/instructor-pages/InsCoursePage.tsx";
import InsMyCourses from "./components/instructor-components/instructor-pages/InsMyCourse.tsx";
import MyCourses from "./components/pages/MyCourses.tsx";
import Dashboard from "./components/pages/Dashboard.tsx";
import App from "./App.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/courses",
        element: <MyCourses />,
    },
    {
        path: "/course-page",
        element: <CoursePage />,
    },
    {
        path: "/ins-course-page",
        element: <InsCoursePage />,
    },
    {
        path: "/ins-courses",
        element: <InsMyCourses />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);

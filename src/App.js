import { BrowserRouter, Routes, Route } from "react-router";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Signup from "./component/Signup";
import TaskForm from "./component/TaskForm";
import TaskList from "./component/TaskList";
import TeamsDetails from "./component/team/TeamsDetails";

import LoginPage from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Project from "./pages/Project";
import Team from "./pages/Team";
import Reports from "./pages/Reports";
import Setting from "./pages/Setting";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/add-task" element={<TaskForm />} />
          <Route path="/task-list" element={<TaskList />} />
          <Route path="/project" element={<Project />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team/:id" element={<TeamsDetails />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

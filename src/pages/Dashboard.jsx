import Sidebar from "../component/Sidebar";
import Projects from "../component/dashboard/Projects";
import Tasks from "../component/dashboard/Tasks";

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <div className="right mt-4 me-4">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Search" />
          <span class="input-group-text">
            <i class="bi bi-search"></i>
          </span>
        </div>

        <Projects />
        <Tasks />
      </div>
    </div>
  );
};
export default Dashboard;

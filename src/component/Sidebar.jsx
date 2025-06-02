import { NavLink } from "react-router";
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">workasana</div>
      <ul>
        <li>
          <NavLink to="/dashboard">
            <i class="bi bi-ui-radios-grid me-2"></i>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/project">
            <i class="bi bi-grid-3x3-gap me-2"></i>
            Project
          </NavLink>
        </li>
        <li>
          <NavLink to="/team">
            <i class="bi bi-people me-2"></i>
            Team
          </NavLink>
        </li>
        <li>
          <NavLink to="/reports">
            <i class="bi bi-bar-chart-line me-2"></i>
            Reports
          </NavLink>
        </li>
        <li>
          <NavLink to="/setting">
            <i class="bi bi-gear me-2"></i>
            Setting
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};
export default Sidebar;

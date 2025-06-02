import Sidebar from "../component/Sidebar";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";

const Project = () => {
  const { data } = useFetch("https://workasana-backened-ul1x.vercel.app/tasks");
  return (
    <div>
      <Sidebar />
      <div class="right mt-4 me-4">
        <h4>Create Moodboard</h4>
        <p>
          This project centres around compiling a digital moodboard to set the
          visual direction and tone for a new brand identity. The moodboard will
          showcase a curated selection of images, color palettes, typography
          samples, textures, and layout inspirations that collectively evoke the
          brand's intended mood and style.
        </p>
        <div className="sec-filter d-flex align-items-center mb-4 mt-5">
          <div class="sec-sortby">
            <div className="d-inline me-2 sortby-title">Sort By:</div>
            <div class="d-inline px-2 py-1 border border-custom">
              Priority Low-High
            </div>
            <div class="d-inline px-2 py-1 border border-custom mx-1">
              Priority High-Low
            </div>
            <div class="d-inline px-2 py-1 border border-custom mx-1">
              Newest First
            </div>
            <div class="d-inline px-2 py-1 border border-custom">
              Oldest First
            </div>
          </div>
          <div className="sec-filter-right d-flex align-items-center ms-auto">
            <select
              className="form-control me-3"
              style={{ "min-width": "80px", "max-width": "100px" }}
            >
              <option value="">Filter</option>
              <option value="">A</option>
              <option value="">B</option>
            </select>
            <button
              type="button"
              className="btn btn-primary"
              style={{ "min-width": "120px" }}
            >
              <i class="bi bi-plus me-1"></i>
              New task
            </button>
          </div>
        </div>
        {/* table start */}
        <table class="table table-bordered">
          <thead className="table-custom">
            <tr>
              <th scope="col">Tasks</th>
              <th scope="col">Owner</th>
              <th scope="col">Priority</th>
              <th scope="col">Due On</th>
              <th>Status</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((task) => (
              <tr key={task._id}>
                <td>{task.name}</td>
                <td>{task.owners.name}</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>{task.status}</td>
                <td>
                  <Link to={`/project/:${task._id}`}>
                    <i class="bi bi-arrow-right"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Project;

import { useState } from "react";
import useFetch from "../../useFetch";
import ProjectsModal from "../dashboard/ProjectsModal";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const { data, loading, error } = useFetch(
    "https://workasana-backened-ul1x.vercel.app/projects"
  );

  const handleModal = (e) => {
    setShowModal(true);

    document.body.classList.add("modal-open");
  };

  const handleClose = (e) => {
    setShowModal(false);
    document.body.classList.remove("modal-open");
  };
  return (
    <>
      <div className="mt-4 d-flex">
        <div className="d-flex align-items-center">
          Projects
          <select
            name=""
            id=""
            className="form-control ms-2"
            style={{ "max-width": "100px" }}
          >
            <option value="">Filter</option>
            <option value="">B</option>
            <option value="">C</option>
          </select>
        </div>
        <button className="btn btn-primary ms-auto" onClick={handleModal}>
          <i class="bi bi-plus"></i>
          New Project
        </button>
      </div>

      <div className="row mt-4">
        {loading && <p>Laoding</p>}
        {data?.map((project) => (
          <div className="col-md-4 mb-3">
            <div className="card card-bg border-0">
              <div className="card-body">
                <h4 className="fs-6 fs-title">{project.name}</h4>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && <ProjectsModal handleClose={handleClose} />}
    </>
  );
};
export default Projects;

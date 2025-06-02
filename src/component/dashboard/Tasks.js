import { useState } from "react";
import useFetch from "../../useFetch";
import TaskModal from "./TaskModal";

const Tasks = () => {
  const { data, loading, error } = useFetch(
    "https://workasana-backened-ul1x.vercel.app/tasks"
  );
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div>
      <section className="sec-task">
        <div className="mt-4 d-flex">
          <div className="d-flex align-items-center">
            <div style={{ "min-width": "70px" }}>My Tasks</div>
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
            New Tasks
          </button>
        </div>

        {showModal && <TaskModal handleClose={handleClose} />}

        <div className="row mt-4">
          {data?.map((task) => (
            <div className="col-md-4 mb-3">
              <div className="card card-bg border-0">
                <div className="card-body">
                  <div
                    className={
                      task.status == "Completed"
                        ? `status complete`
                        : `status orange`
                    }
                  >
                    {task.status}
                  </div>
                  <h4 className="mb-3 fs-6 fs-title">{task.name}</h4>
                  <p className="fw-bold dueOn">Due on: {task.createdAt}</p>
                  <p className="fs-6">{task.owners?.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Tasks;

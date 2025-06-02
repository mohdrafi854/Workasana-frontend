import { useState } from "react";
import { useEffect } from "react";
import useFetch from "../../useFetch";

const TaskModal = ({ handleClose }) => {
  const { data: projects } = useFetch(
    "https://workasana-backened-ul1x.vercel.app/projects"
  );
  const { data: teams } = useFetch(
    "https://workasana-backened-ul1x.vercel.app/teams"
  );
  const { data: users } = useFetch(
    "https://workasana-backened-ul1x.vercel.app/users"
  );
  const [project, setProject] = useState("");
  const [taskName, setTaskName] = useState("");
  const [team, setTeam] = useState("");
  const [owners, setOwners] = useState("");
  const [date, setDate] = useState("");
  const [estTime, setEstTime] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formData = {
    project,
    name: taskName,
    team,
    owners,
    timeToComplete: Number(estTime),
    createdAt: date ? new Date(date).toISOString() : undefined,
  };

  const newTask = async (url) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await newTask("https://workasana-backened-ul1x.vercel.app/tasks");
      setProject("");
      setTaskName("");
      setTeam("");
      setOwners("");
      setDate("");
      setEstTime("");
      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to create task:", error.message);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      handleClose();
    }
  }, [isSubmitted, handleClose]);

  return (
    <>
      <div className="modal fade show d-block" tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                Create New Task | Create Moodboard
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleClose}
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label>Select Project</label>
                  <select
                    className="form-control"
                    onChange={(e) => setProject(e.target.value)}
                  >
                    <option value="">Select a project</option>
                    {projects?.map((item) => (
                      <option value={item._id} key={item._id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label>Task Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Task Name"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label>Select Team</label>
                  <select
                    className="form-control"
                    onChange={(e) => setTeam(e.target.value)}
                  >
                    <option value="">Select a team</option>
                    {teams?.map((team) => (
                      <option key={team._id} value={team._id}>
                        {team.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label>Select Owner</label>
                  <select
                    className="form-control"
                    onChange={(e) => setOwners(e.target.value)}
                  >
                    <option value="">Select an owner</option>
                    {users?.map((user) => (
                      <option key={user._id} value={user._id}>
                        {user.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label>Date</label>
                    <div class="input-group">
                      <input
                        type="date"
                        class="form-control"
                        placeholder="Select date"
                        onChange={(e) => setDate(e.target.value)}
                      />
                      <span class="input-group-text">
                        <i class="bi bi-calendar-check"></i>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label>Estimated Time</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Time in Days"
                      value={estTime}
                      onChange={(e) => setEstTime(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary ms-2">
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
};
export default TaskModal;

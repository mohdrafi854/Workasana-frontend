import { useState } from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const ProjectsModal = ({ handleClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const formData = {
    name,
    description,
  };

  const postData = async (url) => {
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

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      if (name && description) {
        await postData("https://workasana-backened-ul1x.vercel.app/projects");
        setName("");
        setDescription("");
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      handleClose();
      navigate("/dashboard");
    }
  }, [isSubmitted, navigate, handleClose]);

  return (
    <>
      <div className="modal fade show d-block" tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create New Project</h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleClose}
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleOnSubmit}>
                <div className="mb-3">
                  <label>Project Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Project Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label>Project Description</label>
                  <textarea
                    className="form-control"
                    placeholder="Enter Project Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
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
export default ProjectsModal;

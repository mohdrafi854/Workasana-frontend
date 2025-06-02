import { useState } from "react";

const TeamMemberModal = ({ handleClose }) => {
  const [memberName, setMemberName] = useState("");

  const postMembers = async (url) => {
    try {
      const response = fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.Stringify({ name: memberName }),
      });

      if (!response.ok) {
        throw new Error("response was not ok");
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  };

  const handleOnSubmit = async () => {
    try {
      return await postMembers(
        "https://workasana-backened-ul1x.vercel.app/tags"
      );
    } catch (error) {
      console.error("server error", error.message);
    }
  };

  return (
    <>
      <div class="modal fade show d-block">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Add New Member</h5>
              <button
                type="button"
                class="btn-close"
                onClick={handleClose}
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={handleOnSubmit}>
                <div class="mb-3">
                  <label class="form-label">Members Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Member Name"
                    value={memberName}
                    onChange={(e) => setMemberName(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  class="btn btn-secondary me-2"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button type="submit" class="btn btn-primary">
                  Add
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
export default TeamMemberModal;

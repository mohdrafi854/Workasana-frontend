import { useEffect, useState } from "react";

const TeamModal = ({ handleClose }) => {
  const [name, setName] = useState("");
  const [members, setMembers] = useState(["", "", ""]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleMemberChange = (index, value) => {
    const updatedMember = [...members];
    updatedMember[index] = value;
    setMembers(updatedMember);
  };

  const postTeam = async (url) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, members }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      await postTeam("https://workasana-backened-ul1x.vercel.app/teams");
      setName("");
      setMembers("");
      setIsSubmitted(true);
    } catch (error) {}
  };

  useEffect(() => {
    if (isSubmitted) {
      handleClose();
    }
  }, [isSubmitted, handleClose]);
  return (
    <>
      <div class="modal fade show d-block">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Create New Team</h5>
              <button
                type="button"
                class="btn-close"
                onClick={handleClose}
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={handleOnSubmit}>
                <div className="mb-3">
                  <label>Team Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Team Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label>Add Members</label>
                  {Array.isArray(members) ? (
                    members.map((member, index) => (
                      <div className="mb-2" key={index}>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Member Name"
                          value={member}
                          onChange={(e) =>
                            handleMemberChange(index, e.target.value)
                          }
                        />
                      </div>
                    ))
                  ) : (
                    <p>No members available</p>
                  )}
                </div>
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button type="submit" class="btn btn-primary ms-2">
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
export default TeamModal;

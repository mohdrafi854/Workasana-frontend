import Sidebar from "../../component/Sidebar";
import TeamMemberModal from "./TeamMemberModal";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import { useState } from "react";

const TeamsDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const id = useParams();
  const { data, loading, error } = useFetch(
    "https://workasana-backened-ul1x.vercel.app/teams"
  );

  const { data: teamMember } = useFetch(
    "https://workasana-backened-ul1x.vercel.app/tags"
  );

  const filteredTeam = data?.find((team) => team._id == id.id);

  const membersList = filteredTeam?.members || [];

  const handleMemberModal = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Sidebar />
      <div className="right mt-4 me-4">
        <Link className="backBtn" to="/team">
          <i className="bi bi-arrow-left me-2"></i>
          Back to Teams
        </Link>
        <h4>Design Team</h4>
        <h6>Members</h6>
        <ul className="list-unstyled">
          {membersList.length > 0 ? (
            membersList.map((member, index) => (
              <>
                {" "}
                <li key={index}>{member}</li>
              </>
            ))
          ) : (
            <li>Member not found.</li>
          )}
        </ul>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleMemberModal}
        >
          <i class="bi bi-plus"></i>
          Member
        </button>

        {showModal && <TeamMemberModal handleClose={handleModalClose} />}
      </div>
    </>
  );
};
export default TeamsDetails;

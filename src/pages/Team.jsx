import Sidebar from "../component/Sidebar";
import useFetch from "../useFetch";
import Teams from "../component/team/Teams";
import TeamModal from "../component/team/TeamModal";
import { useState } from "react";
const Team = () => {
  const [showModal, setShowModal] = useState(false);
  const { data, error, loading } = useFetch(
    "https://workasana-backened-ul1x.vercel.app/teams"
  );

  const handleModal = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Sidebar />
      <div className="right right mt-4 me-4">
        <div className="d-flex">
          <h4>Team</h4>
          <button
            type="button"
            className="btn btn-primary ms-auto"
            onClick={handleModal}
          >
            <i class="bi bi-plus me-2"></i>
            New Team
          </button>
        </div>

        {loading && <p>Loading</p>}
        {error && <p>Error</p>}
        <Teams teams={data} />

        {showModal && <TeamModal handleClose={handleClose} />}
      </div>
    </div>
  );
};
export default Team;

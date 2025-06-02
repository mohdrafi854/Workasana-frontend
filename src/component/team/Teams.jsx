import { useNavigate } from "react-router-dom";

const Teams = ({ teams }) => {
  const navigate = useNavigate();
  const handleDetails = (pageId) => {
    navigate(`/team/${pageId}`);
  };
  return (
    <div className="row mt-4">
      {teams &&
        teams?.map((team) => (
          <div
            className="col-md-4 mb-3"
            key={team._id}
            onClick={() => handleDetails(`${team._id}`)}
          >
            <div className="card card-bg border-0 card-team">
              <div className="card-body">
                <h4 className="fs-6 fs-title">{team.name}</h4>
                <div>{team.members}</div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Teams;

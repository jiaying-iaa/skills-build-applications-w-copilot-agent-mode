import { useEffect, useState } from 'react';
import { fetchApiData } from '../api/fetchApiData';

// VITE_CODESPACE_NAME must be defined (for example in .env.local) to reach the Codespaces-hosted API.
const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
const teamsApiUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchApiData(teamsApiUrl)
      .then(setTeams)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="container py-4">
      <h1>Teams</h1>
      {error && <p className="text-danger">{error}</p>}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Members</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team._id}>
              <td>{team.name}</td>
              <td>{Array.isArray(team.members) ? team.members.length : 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Teams;

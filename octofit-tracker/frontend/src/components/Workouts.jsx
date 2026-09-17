import { useEffect, useState } from 'react';
import { fetchApiData } from '../api/fetchApiData';

// VITE_CODESPACE_NAME must be defined (for example in .env.local) to reach the Codespaces-hosted API.
const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
const workoutsApiUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchApiData(workoutsApiUrl)
      .then(setWorkouts)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="container py-4">
      <h1>Workouts</h1>
      {error && <p className="text-danger">{error}</p>}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((workout) => (
            <tr key={workout._id}>
              <td>{workout.name}</td>
              <td>{workout.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Workouts;

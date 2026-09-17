import { useEffect, useState } from 'react';
import { fetchApiData } from '../api/fetchApiData';

// VITE_CODESPACE_NAME must be defined (for example in .env.local) to reach the Codespaces-hosted API.
const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
const usersApiUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/';

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchApiData(usersApiUrl)
      .then(setUsers)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="container py-4">
      <h1>Users</h1>
      {error && <p className="text-danger">{error}</p>}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;

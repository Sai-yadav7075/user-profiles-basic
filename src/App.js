import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="container py-5 bg-light min-vh-100">
      <h1 className="text-center mb-5 fw-bold text-primary">
        👩‍💻 User Profiles
      </h1>

      {loading ? (
        <div className="d-flex justify-content-center align-items-center vh-50">
          <div className="spinner-border text-primary" role="status"></div>
        </div>
      ) : (
        <div className="row g-4 p-5">
          {users.map((user) => (
            <div key={user.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
              <UserCard user={user} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

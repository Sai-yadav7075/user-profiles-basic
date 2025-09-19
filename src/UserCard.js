import React from "react";

function UserCard({ user }) {
    const avatarUrl = `https://api.dicebear.com/6.x/avataaars/png?seed=${user.username}`;
     return (
    <div className="card shadow-lg border-0 rounded-4 h-100 text-center " >
      <div className="card-body d-flex flex-column align-items-center mb-3">
        <img
          src={avatarUrl}
          alt={`${user.username} avatar`}
          className="rounded-circle border border-3 border-primary mb-3"
          style={{ width: "120px", height: "120px", objectFit: "cover" }}
        />

        <h5 className="card-title fw-bold text-dark">{user.name}</h5>
        <p className="card-text text-muted mb-1">{user.email}</p>
        <p className="card-text small">{user.phone}</p>
        <p className="card-text">
          <span className="badge bg-primary">{user.company.name}</span>
        </p>

        <a
          href={`http://${user.website}`}
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline-primary btn-sm mt-auto"
        >
          Visit Website
        </a>
      </div>
    </div>
  );

}


export default UserCard;

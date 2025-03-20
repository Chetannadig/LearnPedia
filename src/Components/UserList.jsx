import React, { useState } from "react";
import { FaUser, FaEnvelope, FaBuilding, FaBriefcase, FaArrowDown } from "react-icons/fa"; // Icons for user details
import "./UserList.css";

const UserList = ({ users }) => {
  const [visibleUsers, setVisibleUsers] = useState(6); // Initially show 6 cards

  // Function to handle "Show More" button click
  const handleShowMore = () => {
    setVisibleUsers((prev) => prev + 3); // Show 3 more cards on each click
  };

  return (
    <section className="user-list-section" id="placements">
      <h2>Placements:</h2>
      <div className="user-list">
        {users.slice(0, visibleUsers).map((user) => (
          <div key={user.id} className="user-card">
            <div className="icon-container">
              <FaUser className="icon" /> {/* User icon */}
            </div>
            <h3 className="user-name">{user.name}</h3> {/* User name */}
            <p className="user-detail">
              <span>Email:</span> {user.email} {/* User email */}
            </p>
            <p className="user-detail">
              <span>Company:</span> {user.company.name} {/* User company */}
            </p>
            <p className="user-detail">
              <span>Profession:</span> {user.company.bs} {/* User profession */}
            </p>
          </div>
        ))}
      </div>
      <div className="show-more-container">
        {visibleUsers < users.length && (
          <button className="show-more-button" onClick={handleShowMore}>
            Show More <FaArrowDown className="icon" /> {/* Show More button with icon */}
          </button>
        )}
      </div>
    </section>
  );
};

export default UserList; // Exporting the component
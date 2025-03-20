import React, { useState, useEffect } from "react";
import axios from "axios";
import HeroSection from "./Components/HeroSection.jsx";
import ServiceCards from "./components/ServiceCards.jsx";
import PricingTable from "./components/PricingTable.jsx";
import ContactForm from "./components/ContactForm.jsx";
import UserList from "./components/UserList.jsx";
import SearchBar from "./components/SearchBar.jsx";
import { debounce } from "lodash";
import "./index.css";

const App = () => {
  const [filteredUsers, setFilteredUsers] = useState([]); // State for filtered users
  const [users, setUsers] = useState([]); // State for all users

  // Function to handle search input with debounce
  const handleSearch = debounce((query) => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, 300);

  // Fetch users from API on component mount
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
        setFilteredUsers(response.data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="app">
      <HeroSection /> {/* Hero section component */}
      <ServiceCards /> {/* Service cards component */}
      <PricingTable /> {/* Pricing table component */}
      <UserList users={filteredUsers} /> {/* User list component with filtered users */}
      <SearchBar onSearch={handleSearch} /> {/* Search bar component */}
      <ContactForm /> {/* Contact form component */}
    </div>
  );
};

export default App; // Exporting the App component

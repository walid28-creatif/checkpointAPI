import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./ListUsers.css";
import UserCard from "../UserCard/UserCard";
import Loading from "../Loading/Loading";

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const url = "https://jsonplaceholder.typicode.com/users";
    axios
      .get(url)
      .then((response) => response.data)
      .then((resData) => setUsers(resData))
      .then((response) => {
        setIsLoading(false);
        setUsers(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Welcome, this is the Users List page</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="users-list">
          {users.map((user) => (
            <Link
              to={`/users/user/${user.id}`}
              key={user.id}
              style={{ margin: "2%" }}
            >
              <UserCard user={user} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListUsers;

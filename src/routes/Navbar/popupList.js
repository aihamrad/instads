import React from "react";

const popupList = ({ users, selectedUser, handleClickUser }) => {
  return (
    <div className="absulote z-100 p-m shadow radius-5 bg-white top-100 right-0">
      <ul className="max-width">
        {!selectedUser &&
          users.map((user) => (
            <li
              key={user.id}
              className="text-center btn btn-white border-0 p-m"
              onClick={() => handleClickUser(user)}
            >
              {user.name}
            </li>
          ))}
        {selectedUser && (
          <li
            onClick={() => handleClickUser("")}
            className="text-center btn btn-white border-0 p-m "
          >
            Log out
          </li>
        )}
      </ul>
    </div>
  );
};

export default popupList;

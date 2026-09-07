import { useState } from "react";

const StudentList = () => {
  const [search, setSearch] = useState("");

  const users = [
    {
      id: 1,
      name: "Admin",
      email: "admin@test.com",
      password: "admin123",
      role: "admin",
    },
    {
      id: 2,
      name: "Ali",
      email: "ali@test.com",
      password: "student123",
      role: "student",
    },
  ];

  const filterUser = users.filter((data) => data.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <div>
      <div className="search">
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          placeholder="search ..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="Container">
        {filterUser.length === 0 ? (
          <div className="Empty-state">
            <h3>No User Data Found!</h3>
          </div>
        ) : (
          filterUser.map((data) => (
            <div className="userData" key={data.id}>
              <h3>{data.name}</h3>
              <p>{data.email}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default StudentList;

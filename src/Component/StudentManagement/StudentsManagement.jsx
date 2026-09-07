import { useState } from "react";
import StudentStats from "./StudentStats";
import StudentList from "./StudentList";
function StudentsManagement() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="app">
        <div className="container">
          <header className="header">
            <p className="eyebrow">Student Management</p>
            <h1>Student Dashboard</h1>
            <p className="subtitle">
              Manage students, marks and performance in one place.
            </p>
          </header>

          <StudentStats />

          <section className="students-section">
            <div className="section-header">
              <div>
                <h2>Students</h2>
                <p>View and manage student performance.</p>

                <div className="student-filters">
                  <input
                    type="text"
                    placeholder="Search student name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>

              <div className="filter-buttons">
                <button
                  className={filter === "all" ? "active" : ""}
                  onClick={() => setFilter("all")}
                >
                  Show All
                </button>

                <button
                  className={filter === "passed" ? "active" : ""}
                  onClick={() => setFilter("passed")}
                >
                  Passed Only
                </button>
              </div>
            </div>

            <StudentList filter={filter} search={search} />
          </section>
        </div>
      </div>
    </>
  );
}

export default StudentsManagement;

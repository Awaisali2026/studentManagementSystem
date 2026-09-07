import { useSelector } from "react-redux";

const StudentUsingRedux = () => {
  const userData = useSelector((state) => state.students);
  console.log(userData);
  return (
    <div>
      <h2>Student Data using Redux</h2>
      {userData.length === 0 ? (
        <div> No Student Data Found! </div>
      ) : (
        userData.map((data) => (
          <div key={data.id}>
            <h2>{data.name}</h2>
            <p>{data.marks}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default StudentUsingRedux;

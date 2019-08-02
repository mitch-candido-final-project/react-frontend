import React from "react";

function AllProjects(props) {
  const getAllProjects = () => {
    return props.allProjects.map(eachProject => {
      console.log(eachProject.name);
      return (
        <div key={eachProject._id}>
          <h2> {eachProject.name}</h2>
        </div>
      );
    });
  };
  return <div>{getAllProjects()}</div>;
}

export default AllProjects;

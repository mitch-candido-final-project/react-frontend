import React from "react";
import ProjectService from "../services/ProjectService";

function ProjectDetails(props) {
  const getProjectInfo = async () => {
    let projService = new ProjectService();

    let theProject = await projService.projectDetails(props.match.params.id);

    if (theProject.name) {
      return (
        <div>
          <p>testtt</p>
          <h1>a </h1>
          <p>bll</p>
        </div>
      );
    } else {
      return <h2>loading..</h2>;
    }
  };

  return <div className="project-details">{getProjectInfo()}</div>;
}

export default ProjectDetails;

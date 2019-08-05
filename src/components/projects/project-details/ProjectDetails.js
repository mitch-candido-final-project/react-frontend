import React from "react";
import "./project-details.css";

function ProjectDetails(props) {
  const allProjects = props.allProjects;
  const projectId = props.projectDetailID;

  const getProjectInfo = () => {
    const singleProject = allProjects.filter(project => {
      return project._id === projectId;
    });
    console.log("this got the project", singleProject);

    return singleProject.map(singleProject => {
      return (
        <div key={singleProject._id} className="project-details-content">
          <div className="project-details-info">
            <h3>{singleProject.name}</h3>
            <p>{singleProject.description}</p>
            <p>{singleProject.startDate}</p>
            <p>{singleProject.dueDate}</p>
            <p>{singleProject.timeSpent}</p>
            <p>{singleProject.complete}</p>
            <p>{singleProject.isPublic}</p>
            {/* still have to do the images */}
          </div>
          <div className="exit-details">
            <button onClick={props.toggleProjectView}>
              <i className="fas fa-times-circle" />
            </button>
          </div>
        </div>
      );
    });

    // if (singleProject._id) {
    //   return (
    //     <div>
    //       <p>{singleProject.name}</p>
    //       <h1>a </h1>
    //       <p>bll</p>
    //     </div>
    //   );
    // } else {
    //   return <h2>loading..</h2>;
    // }
  };

  return <div className="project-details">{getProjectInfo()}</div>;
}

export default ProjectDetails;

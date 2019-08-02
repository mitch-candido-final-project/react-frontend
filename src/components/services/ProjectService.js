import axios from "axios";

class ProjectService {
  constructor() {
    let service = axios.create({
      baseURL: "http://localhost:5000/api/projects",
      withCredentials: true
    });

    this.service = service;
  }

  addProject = info => {
    return this.service.post(
      "/new-project",
      {
        name: info.name,
        description: info.description,
        startDate: info.startDate,
        dueDate: info.dueDate,
        timeSpent: 0,
        complete: false,
        isPublic: info.isPublic,
        image: info.image
      },
      { withCredentials: true }
    );
  };

  projectDetails = id => {
    return this.service.get("/details/" + id).then(response => response.data);
  };

  getAllProjects = () => {
    return this.service.get("/all-projects/").then(response => response.data);
  };
}

export default ProjectService;

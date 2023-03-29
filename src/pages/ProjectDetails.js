// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getProjectDetails } from "../api";

// function ProjectDetails() {
//   const { projectId } = useParams();
//   const [project, setProject] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       const data = await getProjectDetails(projectId);
//       setProject(data);
//     }
//     fetchData();
//   }, [projectId]);

//   if (!project) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>{project.title}</h2>
//       <p>{project.description}</p>
//       <p>Start date: {project.startDate}</p>
//       <p>End date: {project.endDate}</p>
//       <p>Assigned to: {project.assignedTo}</p>
//     </div>
//   );
// }

// export default ProjectDetails;

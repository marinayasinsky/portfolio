import axios from "axios";

const BASE_URL = "https://example.com/api";

export const getProjectDetails = async (projectId) => {
  const response = await axios.get(`${BASE_URL}/projects/${projectId}`);
  return response.data;
};

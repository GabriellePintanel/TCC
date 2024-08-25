import axios from "axios";

export type ProjectProps = {
  id: number;
  title: string;
  photo: string;
  content: string;
};

export const retrieveProjects = async () => {
  const response = await axios.get<ProjectProps[]>("/api/projects/all.json");
  return response.data;
};

export const retrievePresentationById = async (id: number) => {
  const response = await axios.get<ProjectProps>(`/api/projects/${id}.json`);
  return response.data;
};

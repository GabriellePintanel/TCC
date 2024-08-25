import axios from "axios";

export type PresentationProps = {
  id: number;
  title: string;
  place: string;
  photo: string;
  content: string;
};

export const retrievePresentations = async () => {
  const response = await axios.get<PresentationProps[]>(
    "/api/presentations/all.json"
  );
  return response.data;
};

export const retrievePresentationById = async (id: number) => {
  const response = await axios.get<PresentationProps>(
    `/api/presentations/${id}.json`
  );
  return response.data;
};

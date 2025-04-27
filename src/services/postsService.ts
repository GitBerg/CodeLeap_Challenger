import { api } from "./api";

export const createPost = async (username: string, title: string, content: string) => {
  const response = await api.post("/", {
    username,
    title,
    content,
  });
  return response.data;
};

export const getPosts = async () => {
  const response = await api.get("/");
  return response.data.results; 
};


export const editPost = async (id: number, title: string, content: string) => {
  const response = await api.patch(`/${id}/`, {
    title,
    content,
  });
  return response.data;
};

export const deletePost = async (id: number) => {
  await api.delete(`/${id}/`);
};
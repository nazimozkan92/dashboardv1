import axios from "axios";

export const fetchPosts = async () => {
  const { data } = await axios.get(
    "https://localhost:7260/api/Post/GetAllPosts"
  );
  return data;
};

export const fetchPost = async (id) => {
  let strId = id.toString();
  const { data } = await axios.get(
    `https://localhost:7260/api/Post/GetPostWithId/post?id=${strId}`
  );
  return data;
};

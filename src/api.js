import axios from "axios";

//#region Post
export const fetchPosts = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_POST_ENDPOINT}/getAllPosts/`
  );
  return data;
};

export const fetchPost = async (id) => {
  let strId = id.toString();
  const { data } = await axios.get(
    `${process.env.REACT_APP_POST_ENDPOINT}/GetPostWithId/post?id=${strId}`
  );
  return data;
};

export const newPost = async () => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_POST_ENDPOINT}/CreateNewPost`
  );
  return data;
};

export const updatePost = async (post_id, input) => {
  const { data } = await axios
    .post(
      `${process.env.REACT_APP_POST_ENDPOINT}/UpdatePostWithId/post?id=${post_id}`,
      input
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  return data;
};

export const deletePost = async (post_id) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_POST_ENDPOINT}/DeletePostWithId/post?id=${post_id}`
  );
  return data;
};

//#endregion Post

//#region Category

export const fetchCategories = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_CATEGORY_ENDPOINT}/GetAllCategories/`
  );
  return data;
};

//#endregion Category

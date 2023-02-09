import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchPost } from "../api";

function Post() {
  const { id } = useParams();

  const { isLoading, isError, data } = useQuery(["test", id], () =>
    fetchPost(id)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    <div>Error...</div>;
  }

  console.log(data);
  return <div>Post detail {id}</div>;
}

export default Post;

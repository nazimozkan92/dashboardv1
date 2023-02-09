import {
  Checkbox,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";

import { fetchPosts } from "../api";

function Posts() {
  const { isLoading, error, data } = useQuery("posts", fetchPosts);
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Th>Başlık</Th>
            <Th>İçerik</Th>
            <Th>Yazar</Th>
            <Th>Yayın tarihi</Th>
          </Thead>
          {data.map((item, index) => (
            <Tbody key={index}>
              <Tr>
                <Td>{item.title}</Td>
                <Td>{item.shortText}</Td>
                <Td>{item.authorName}</Td>
                <Td>{item.publishDate}</Td>
              </Tr>
            </Tbody>
          ))}
        </Table>
      </TableContainer>
    </>
  );
}

export default Posts;

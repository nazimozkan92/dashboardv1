import {
  Link,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import { useNewTab } from "../context/NewTabContext";

import { fetchPosts } from "../api";

function Posts() {
  const { setTabData } = useNewTab();
  const { isLoading, error, data } = useQuery("posts", fetchPosts);
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
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
            <Tr key={index}>
              <Link
                onClick={() =>
                  setTabData({
                    tabId: item.id,
                    label: item.title,
                    content: item.id,
                  })
                }
              >
                <Td>{item.title}</Td>
              </Link>
              <Td>{item.shortText}</Td>
              <Td>{item.authorName}</Td>
              <Td>{item.publishDate}</Td>
            </Tr>
          </Tbody>
        ))}
      </Table>
    </TableContainer>
  );
}

export default Posts;

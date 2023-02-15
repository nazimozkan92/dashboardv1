import {
  Card,
  Flex,
  Image,
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

  console.log(data);
  return (
    <Card>
      <TableContainer>
        <Table variant="basic" colorScheme="blackAlpha" size="md">
          <Thead>
            <Th>Görsel</Th>
            <Th>Başlık</Th>
            <Th>İçerik</Th>
            <Th>Kategoriler</Th>
            <Th>Yazar</Th>
            <Th>Yorumlar</Th>
            <Th>Yayın tarihi</Th>
          </Thead>
          {data.map((item, index) => (
            <Tbody key={index}>
              <Tr key={index}>
                <Td>
                  <Image
                    src={item.mainPicture}
                    alt="Dan Abramov"
                    className="postListImg"
                  />
                </Td>
                <Td>
                  <Link
                    onClick={() =>
                      setTabData({
                        tabId: 3 + ":" + item.id,
                        label: item.title,
                        content: item.id,
                      })
                    }
                  >
                    {item.title}
                  </Link>
                </Td>
                <Td>{item.shortText}</Td>
                <Td>{item.categoryList}</Td>
                <Td>{item.authorName}</Td>
                <Td>{item.commentCount}</Td>
                <Td>{item.publishDate.toLocaleString()}</Td>
              </Tr>
            </Tbody>
          ))}
        </Table>
      </TableContainer>
    </Card>
  );
}

export default Posts;

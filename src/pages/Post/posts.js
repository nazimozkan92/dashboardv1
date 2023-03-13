import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Image,
  Link,
  List,
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
import { useNewTab } from "../../context/NewTabContext";

import { fetchPosts, deletePost } from "../../api";
import { DeleteIcon } from "@chakra-ui/icons";
import QuickEdit from "./quickEdit";
import { useState } from "react";

function Posts() {
  const { setTabData } = useNewTab();
  const [postId, setPostId] = useState();
  const { isLoading, error, data } = useQuery("posts", fetchPosts);
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const deletePostWithId = (postId) => {
    console.log(postId);
  };

  return (
    <Card>
      <Box className="postListHeader">
        <Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(7, 1fr)">
          <GridItem colSpan={1}>
            <CardHeader>
              <Heading size="sm">Görsel</Heading>
            </CardHeader>
          </GridItem>
          <GridItem colSpan={1}>
            <CardHeader>
              <Heading size="sm">Başlık</Heading>
            </CardHeader>
          </GridItem>
          <GridItem colSpan={1}>
            <CardHeader>
              <Heading size="sm" width="37vw">
                Kısa Yazı
              </Heading>
            </CardHeader>
          </GridItem>
          <GridItem colSpan={1}>
            <CardHeader>
              <Heading size="sm">Kategoriler</Heading>
            </CardHeader>
          </GridItem>
          <GridItem colSpan={1}>
            <CardHeader>
              <Heading size="sm">Yazar</Heading>
            </CardHeader>
          </GridItem>
          <GridItem colSpan={1}>
            <CardHeader>
              <Heading size="sm">Yorumlar</Heading>
            </CardHeader>
          </GridItem>
          <GridItem colSpan={1}>
            <CardHeader>
              <Heading size="sm">Son Güncellenme</Heading>
            </CardHeader>
          </GridItem>
        </Grid>
      </Box>
      {data.map((item, index) => (
        <Accordion key={index} allowToggle>
          <AccordionItem>
            <AccordionButton
              className="postListArea"
              onClick={() => {
                setPostId(item.id);
              }}
            >
              <Grid
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(7, 1fr)"
                className="postListGrid"
                key={index}
              >
                <GridItem colSpan={1}>
                  <CardBody>
                    <Image
                      src={item.mainPicture}
                      alt="Dan Abramov"
                      className="postListImg"
                    />
                  </CardBody>
                </GridItem>
                <GridItem colSpan={1}>
                  <CardBody>
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
                  </CardBody>
                </GridItem>
                <GridItem colSpan={1} width="40vw">
                  <CardBody>{item.shortText}</CardBody>
                </GridItem>
                <GridItem colSpan={1}>
                  <CardBody>
                    {item.categoryList.map((category, index) => {
                      return (
                        <Link key={index}>
                          {category}
                          {category[1] == null ? null : ","}{" "}
                        </Link>
                      );
                    })}
                  </CardBody>
                </GridItem>
                <GridItem colSpan={1}>
                  <CardBody>{item.authorName}</CardBody>
                </GridItem>
                <GridItem colSpan={1}>
                  <CardBody>{item.commentCount}</CardBody>
                </GridItem>
                <GridItem colSpan={1}>
                  <CardBody>{item.publishDate.toLocaleString()}</CardBody>
                </GridItem>
              </Grid>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <QuickEdit postId={postId} />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ))}
    </Card>
  );
}

export default Posts;

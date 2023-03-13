import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";


import CommentList from "./commentList";
import CounterArea from "./counterArea";
import PostList from "./postList";
import SubscribeList from "./subscribeList";
import TrendPosts from "./trendPosts";

function Dashboard() {
  return (
    <Flex className="componentBody">
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem colSpan={5} h="7vh">
          <CounterArea />
        </GridItem>
        <GridItem colSpan={3}>
          <CommentList />
        </GridItem>
        <GridItem colSpan={2}>
          <TrendPosts />
        </GridItem>
        <GridItem colSpan={1}>
          <SubscribeList />
        </GridItem>
        <GridItem colSpan={4}>
          <PostList />
        </GridItem>
      </Grid>
    </Flex>
  );
}

export default Dashboard;

import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";

function CounterArea() {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6} w="100%">
      <GridItem w="100%" h="10">
        <Card>
          <CardBody className="cardBodyArea">
            <Heading size="xs" textTransform="uppercase">
              Ziyaretçi
            </Heading>
            <Text fontSize="md">55745</Text>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem w="100%" h="10">
        <Card>
          <CardBody className="cardBodyArea">
            <Heading size="xs" textTransform="uppercase">
              Yorum
            </Heading>
            <Text fontSize="md">700</Text>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem w="100%" h="10">
        <Card>
          <CardBody className="cardBodyArea">
            <Heading size="xs" textTransform="uppercase">
              Geçirilen Süre
            </Heading>
            <Text fontSize="md">657 dk</Text>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem w="100%" h="10">
        <Card>
          <CardBody className="cardBodyArea">
            <Heading size="xs" textTransform="uppercase">
              Üye sayısı
            </Heading>
            <Text fontSize="md">7650</Text>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem w="100%" h="10">
        <Card>
          <CardBody className="cardBodyArea">
            <Heading size="xs" textTransform="uppercase">
              Takipçi Sayısı
            </Heading>
            <Text fontSize="md">7747</Text>
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
  );
}

export default CounterArea;

import React from "react";
import { AddIcon, CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  IconButton,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

function TrendPosts() {
  return (
    <Card>
      <CardHeader>
        <Heading size="xs" textTransform="uppercase">
          Trend Yazılar
        </Heading>
      </CardHeader>
      <Divider className="dashboardDivider" />
      <TableContainer>
        <Table variant="stripped" size="md">
          <Thead>
            <Tr>
              <Th>Yazı</Th>
              <Th>Tıklanma</Th>
              <Th>Ortalama süre</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Irure quis nisi laboris aliqua incididunt.</Td>
              <Td>54874</Td>
              <Td>5 dk</Td>
            </Tr>
            <Tr>
              <Td>Irure quis nisi laboris aliqua incididunt.</Td>
              <Td>54874</Td>
              <Td>5 dk</Td>
            </Tr>
            <Tr>
              <Td>Irure quis nisi laboris aliqua incididunt.</Td>
              <Td>54874</Td>
              <Td>5 dk</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <CardFooter className="commentListFooter">
        <Button variant="solid" colorScheme="teal" size="sm">
          Tüm Yazılar
        </Button>
      </CardFooter>
    </Card>
  );
}

export default TrendPosts;

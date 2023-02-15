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

function SubscribeList() {
  return (
    <Card>
      <CardHeader>
        <Heading size="xs" textTransform="uppercase">
          Son Abonelikler
        </Heading>
      </CardHeader>
      <Divider className="dashboardDivider" />
      <TableContainer>
        <Table variant="stripped" size="md">
          <Thead>
            <Tr>
              <Th>Mail Adresi</Th>
              <Th>Tarih</Th>
              <Th>Ip Adresi</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>nrzkn92@gmail.com</Td>
              <Td>22.05.2023</Td>
              <Td>84.154.147.52</Td>
            </Tr>
            <Tr>
              <Td>nrzkn92@gmail.com</Td>
              <Td>22.05.2023</Td>
              <Td>84.154.147.52</Td>
            </Tr>
            <Tr>
              <Td>nrzkn92@gmail.com</Td>
              <Td>22.05.2023</Td>
              <Td>84.154.147.52</Td>
            </Tr>
            <Tr>
              <Td>nrzkn92@gmail.com</Td>
              <Td>22.05.2023</Td>
              <Td>84.154.147.52</Td>
            </Tr>
            <Tr>
              <Td>nrzkn92@gmail.com</Td>
              <Td>22.05.2023</Td>
              <Td>84.154.147.52</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <CardFooter className="commentListFooter">
        <Button variant="solid" colorScheme="teal" size="sm">
          Tüm Liste
        </Button>
      </CardFooter>
    </Card>
  );
}

export default SubscribeList;

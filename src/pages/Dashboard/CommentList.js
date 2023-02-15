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
import React from "react";

function CommentList() {
  return (
    <Card>
      <CardHeader>
        <Heading size="xs" textTransform="uppercase">
          Son Yorumlar
        </Heading>
      </CardHeader>
      <Divider className="dashboardDivider" />
      <TableContainer>
        <Table variant="striped" colorScheme="blackAlpha" size="md">
          <Thead>
            <Tr>
              <Th>Yazı</Th>
              <Th>Son Yorum</Th>
              <Th>Yazar Adı</Th>
              <Th>İşlem</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Yazı 1</Td>
              <Td>
                Irure quis nisi laboris aliqua incididunt. Do irure aliquip
                culpa sint incididunt in...
              </Td>
              <Td>user12345</Td>
              <Td>
                <Stack direction="row" spacing={4} align="center">
                  <IconButton
                    aria-label="Onayla"
                    icon={<CheckIcon />}
                    colorScheme="green"
                    size="xs"
                  />
                  <IconButton
                    aria-label="Onayla"
                    icon={<DeleteIcon />}
                    colorScheme="red"
                    size="xs"
                  />
                </Stack>
              </Td>
            </Tr>
            <Tr>
              <Td>Yazı 1</Td>
              <Td>
                Irure quis nisi laboris aliqua incididunt. Do irure aliquip
                culpa sint incididunt in...
              </Td>
              <Td>user12345</Td>
              <Td>
                <Stack direction="row" spacing={4} align="center">
                  <IconButton
                    aria-label="Onayla"
                    icon={<CheckIcon />}
                    colorScheme="green"
                    size="xs"
                  />
                  <IconButton
                    aria-label="Onayla"
                    icon={<DeleteIcon />}
                    colorScheme="red"
                    size="xs"
                  />
                </Stack>
              </Td>
            </Tr>
            <Tr>
              <Td>Yazı 1</Td>
              <Td>
                Irure quis nisi laboris aliqua incididunt. Do irure aliquip
                culpa sint incididunt in...
              </Td>
              <Td>user12345</Td>
              <Td>
                <Stack direction="row" spacing={4} align="center">
                  <IconButton
                    aria-label="Onayla"
                    icon={<CheckIcon />}
                    colorScheme="green"
                    size="xs"
                  />
                  <IconButton
                    aria-label="Onayla"
                    icon={<DeleteIcon />}
                    colorScheme="red"
                    size="xs"
                  />
                </Stack>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <CardFooter className="commentListFooter">
        <Button variant="solid" colorScheme="teal" size="sm">
          Tüm Yorumlar
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CommentList;

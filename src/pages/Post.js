import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchPost } from "../api";

import {
  Box,
  Button,
  Card,
  Center,
  Checkbox,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function Post({ postId }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [checkedItems, setCheckedItems] = useState([false, false]);
  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  const { isLoading, isError, data } = useQuery(["postDetail", postId], () =>
    fetchPost(postId)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    <div>Error...</div>;
  }

  return (
    <Card>
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(5, 1fr)"
        w="100%"
        gap={3}
        p={2}
      >
        <GridItem  colSpan={4} className="postEditorArea">
          <Input
            placeholder={data.title}
            defaultValue={data.title}
            className="postTitleInput"
          />
          <div className="postEditor">
            <CKEditor
              editor={ClassicEditor}
              data={data.shortText}
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                // console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log("Data", data);
              }}
              onBlur={(event, editor) => {}}
              onFocus={(event, editor) => {}}
            />
          </div>
        </GridItem>
        <GridItem colSpan={1} className="postNavbar">
          {/* Kategoriler */}
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p="2"
            className="postNavPanels"
          >
            <Heading as="h4" size="md">
              Kategoriler
            </Heading>
            <Divider className="postNavDiv" />
            <Checkbox
              isChecked={allChecked}
              isIndeterminate={isIndeterminate}
              onChange={(e) =>
                setCheckedItems([e.target.checked, e.target.checked])
              }
            >
              {data.categoryList}
            </Checkbox>
            <Stack pl={6} mt={1} spacing={1}>
              {/* <Checkbox
                isChecked={checkedItems[0]}
                onChange={(e) =>
                  setCheckedItems([e.target.checked, checkedItems[1]])
                }
              >
                Child Checkbox 1
              </Checkbox>
              <Checkbox
                isChecked={checkedItems[1]}
                onChange={(e) =>
                  setCheckedItems([checkedItems[0], e.target.checked])
                }
              >
                Child Checkbox 2
              </Checkbox> */}
            </Stack>
            <div className="postNavCategoryButton">
              <Button
                colorScheme="teal"
                variant="outline"
                size="sm"
                onClick={onOpen}
              >
                Güncelle
              </Button>
            </div>
          </Box>

          {/* Yazarlar */}
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p="2"
            className="postNavPanels"
          >
            <Heading as="h4" size="md">
              Yazar
            </Heading>
            <Divider className="postNavDiv" />
            <Stack>
              <Link>{data.authorName}</Link>
            </Stack>
          </Box>

          {/* Görsel */}
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p="2"
            className="postNavPanels"
          >
            <Heading as="h4" size="md">
              Kapak Görseli
            </Heading>
            <Divider className="postNavDiv" />
            <Image src={data.pictureList} alt="Dan Abramov" />
            <div className="postNavImageButton">
              <Button
                colorScheme="teal"
                variant="outline"
                size="sm"
                onClick={onOpen}
              >
                Görsel Yükle
              </Button>
            </div>
          </Box>

          {/* Yorumlar */}
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p="2"
            className="postNavPanels"
          >
            <Heading as="h4" size="md">
              Son Yorum
            </Heading>
            <Divider className="postNavDiv" />
            {data.commentList.length > 0 ? (
              <>
                <TableContainer>
                  <Table variant="simple">
                    <Tbody>
                      <Tr>
                        <Td>
                          <Link>
                            {data.commentList[data.commentList.length - 1]}
                          </Link>
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
                <div className="postNavImageButton">
                  <Button
                    colorScheme="teal"
                    variant="outline"
                    size="sm"
                    onClick={onOpen}
                  >
                    Tüm Yorumlar ({data.commentList.length})
                  </Button>
                </div>
              </>
            ) : (
              <>"Henüz yorum yok"</>
            )}
          </Box>
          <div className="postNavButton">
            <Button colorScheme="teal">Güncelle</Button>
          </div>
        </GridItem>
      </Grid>

      {/* Görsel yükleme */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Test</Text>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Kapat
            </Button>
            <Button colorScheme="teal">Seç</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Card>
  );
}

export default Post;

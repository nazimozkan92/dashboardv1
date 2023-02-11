import React, { useState } from "react";
import { useQuery } from "react-query";
import { useNewTab } from "../context/NewTabContext";
import { fetchPost } from "../api";

import {
  Box,
  Button,
  Center,
  Checkbox,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function Post() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { tabData } = useNewTab();
  const tabId = tabData.tabId;
  const [checkedItems, setCheckedItems] = useState([false, false]);
  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;
  const { isLoading, isError, data } = useQuery(["test", tabId], () =>
    fetchPost(tabId)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    <div>Error...</div>;
  }

  console.log(data);

  return (
    <>
      <Grid
        templateAreas={`
      "main nav"
      `}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"80vw 1fr"}
        h="92vh"
      >
        <GridItem pl="2" area={"main"} className="postEditorArea">
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
                console.log("Editor is ready to use!", editor);
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
          <GridItem pl="2" area={"nav"} className="postNavbar">
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
              <Stack>
                <Checkbox
                  isChecked={allChecked}
                  isIndeterminate={isIndeterminate}
                  onChange={(e) =>
                    setCheckedItems([e.target.checked, e.target.checked])
                  }
                >
                  Kategori 1
                </Checkbox>

                <Checkbox
                  isChecked={allChecked}
                  isIndeterminate={isIndeterminate}
                  onChange={(e) =>
                    setCheckedItems([e.target.checked, e.target.checked])
                  }
                >
                  Kategori 2
                </Checkbox>
              </Stack>
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
                <Checkbox
                  isChecked={allChecked}
                  isIndeterminate={isIndeterminate}
                  onChange={(e) =>
                    setCheckedItems([e.target.checked, e.target.checked])
                  }
                >
                  Yazar Adı 1
                </Checkbox>
              </Stack>
              <Stack>
                <Checkbox
                  isChecked={allChecked}
                  isIndeterminate={isIndeterminate}
                  onChange={(e) =>
                    setCheckedItems([e.target.checked, e.target.checked])
                  }
                >
                  Yazar Adı 2
                </Checkbox>
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
              <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
              <div className="postNavImageButton">
                <Button colorScheme="teal" variant="outline" onClick={onOpen}>
                  Görsel Yükle
                </Button>
              </div>
            </Box>
            <div className="postNavButton">
              <Button colorScheme="teal">Güncelle</Button>
            </div>
          </GridItem>
      </Grid>
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
    </>
  );
}

export default Post;

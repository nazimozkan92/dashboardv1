import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Divider,
  Heading,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { fetchCategories } from "../../../api";

function Categories() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [categoryId, setCategoryId] = useState([]);
  const [checkedItems, setCheckedItems] = useState([
    {
      id: null,
      status: false,
    },
  ]);
  // const allChecked = checkedItems.every(Boolean);
  // const isIndeterminate = checkedItems.some(Boolean) && !allChecked;
  const { isLoading, error, data } = useQuery("categories", fetchCategories);

  useEffect(() => {
    setCheckedItems(categoryId.find((item) => item === item) ? {
      id: null,
      status: true,
    } : false);
  }, [categoryId]);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const addCategoryId = (e) => {
    let value = e.target.value;
    const getIndex = categoryId.indexOf(value);
    const result = categoryId.find((item) => item === value);
    if (result == undefined) {
      setCategoryId(categoryId.concat(value));
    } else {
      // setCategoryId(delete categoryId[]);
    }
  };

  console.log("checkbox", checkedItems);
  console.log("categoryId", categoryId);

  return (
    <>
      <Box
        name="categoryList"
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
        <UnorderedList>
          <ListItem></ListItem>
        </UnorderedList>
        <Modal isOpen={isOpen} onClose={onClose} className="categoryModal">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Kategoriler</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {data.map((item, index) => (
                <Accordion defaultIndex={[0]} allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <Checkbox
                            value={item.id}
                            onChange={(e) => addCategoryId(e)}
                          >
                            {item.categoryName}
                          </Checkbox>
                        </Box>
                        {item.subCategories.length > 0 ? (
                          <AccordionIcon />
                        ) : null}
                      </AccordionButton>
                    </h2>
                    {item.subCategories != null
                      ? item.subCategories.map((subItem, index) => (
                          <AccordionPanel pb={4}>
                            <Stack pl={6} mt={1} spacing={1}>
                              <Checkbox
                                value={subItem.id}
                                isChecked={checkedItems[subItem.id]}
                                onChange={(e) => addCategoryId(e)}
                              >
                                {subItem.categoryName}
                              </Checkbox>
                            </Stack>
                          </AccordionPanel>
                        ))
                      : null}
                  </AccordionItem>
                </Accordion>
              ))}
            </ModalBody>

            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Kapat
              </Button>
              <Button colorScheme="teal">Seç</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
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
    </>
  );
}

export default Categories;

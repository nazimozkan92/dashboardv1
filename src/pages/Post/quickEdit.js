import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchPost, updatePost } from "../../api";

import {
  Box,
  Button,
  Card,
  Divider,
  FormControl,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Link,
  ListItem,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Textarea,
  Tr,
  UnorderedList,
} from "@chakra-ui/react";

import { Formik } from "formik";
import validationSchema from "./validations";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CategoryModal from "./AddNewPost/categories";

function QuickEdit({ postId }) {
  const { isLoading, isError, data } = useQuery(["postDetail", postId], () =>
    fetchPost(postId)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    <div>Error...</div>;
  }

  console.log(postId);

  const handleSubmit = async (values, bag) => {
    console.log("submitting");
    try {
      await updatePost(postId, values);
      console.log("güncellendi...");
    } catch (error) {
      console.log("güncellenmedi...");
    }
  };

  return (
    <Formik
      initialValues={{
        title: data.title,
        shortText: data.shortText,
        content: data.content,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        handleSubmit,
        errors,
        touched,
        handleChange,
        handleBlur,
        values,
        isSubmitting,
      }) => (
        <>
          <Card>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <Box className="quickEditInput">
                  <InputGroup className="quickEditTitle">
                    <InputLeftAddon children="Başlık" />
                    <Input
                      name="title"
                      placeholder={data.title}
                      defaultValue={data.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.title && errors.title}
                      disabled={isSubmitting}
                    />
                  </InputGroup>
                  <InputGroup className="quickEditShortText">
                    <InputLeftAddon children="Kısa yazı" />
                    <Input
                      name="shortText"
                      placeholder={data.shortText}
                      defaultValue={data.shortText}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.shortText && errors.shortText}
                      disabled={isSubmitting}
                    />
                  </InputGroup>
                </Box>
                <Box className="quickEditBottomArea">
                  {/* TextArea */}
                  <Box
                    name="content"
                    maxW="sm"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    p="2"
                    className="postNavPanels"
                  >
                    <Heading as="h4" size="md">
                      İçerik
                    </Heading>
                    <Divider className="postNavDiv" />
                    <Textarea value={data.content} />
                  </Box>
                  {/* Kategoriler */}
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
                    <UnorderedList disabled={isSubmitting}>
                      <ListItem>{data.postCategories[0].categoryName}</ListItem>
                    </UnorderedList>

                    <div className="postNavCategoryButton">
                      <Button colorScheme="teal" variant="outline" size="sm">
                        Güncelle
                      </Button>
                    </div>
                  </Box>
                </Box>
              </FormControl>
              <Button colorScheme="teal" type="submit" isLoading={isSubmitting}>
                Güncelle
              </Button>
            </form>
          </Card>

          <CategoryModal />
        </>
      )}
    </Formik>
  );
}

export default QuickEdit;

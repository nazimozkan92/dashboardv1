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
  Link,
  ListItem,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
  UnorderedList,
} from "@chakra-ui/react";

import { Formik } from "formik";
import validationSchema from "./validations";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CategoryModal from "./AddNewPost/categories";

function PostDetail({ postId }) {

  const { isLoading, isError, data } = useQuery(["postDetail", postId], () =>
    fetchPost(postId)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    <div>Error...</div>;
  }

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
                <Grid
                  templateRows="repeat(1, 1fr)"
                  templateColumns="repeat(5, 1fr)"
                  w="100%"
                  gap={3}
                  p={2}
                >
                  <GridItem colSpan={4} className="postEditorArea">
                    <Input
                      name="title"
                      placeholder={data.title}
                      defaultValue={data.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.title && errors.title}
                      disabled={isSubmitting}
                      className="postTitleInput"
                    />
                    <Input
                      name="shortText"
                      placeholder={data.shortText}
                      defaultValue={data.shortText}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.shortText && errors.shortText}
                      disabled={isSubmitting}
                      className="postSummaryInput"
                    />
                    <div className="postEditor">
                      <CKEditor
                        name="content"
                        editor={ClassicEditor}
                        data={data.content}
                        onReady={(editor) => {}}
                        onChange={(event, editor) => {
                          values.content = editor.getData();
                        }}
                        onBlur={(event, editor) => {}}
                        onFocus={(event, editor) => {}}
                      />
                    </div>
                  </GridItem>
                  <GridItem colSpan={1} className="postNavbar">
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
                        <ListItem>
                          {data.postCategories[0].categoryName}
                        </ListItem>
                      </UnorderedList>

                      <div className="postNavCategoryButton">
                        <Button colorScheme="teal" variant="outline" size="sm">
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
                          disabled={isSubmitting}
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
                                      {
                                        data.commentList[
                                          data.commentList.length - 1
                                        ]
                                      }
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
                            >
                              Tüm Yorumlar ({data.commentList.length})
                            </Button>
                          </div>
                        </>
                      ) : (
                        <>"Henüz yorum yok"</>
                      )}
                    </Box>
                  </GridItem>
                </Grid>
              </FormControl>
              <div className="postNavButton">
                <Button
                  colorScheme="teal"
                  type="submit"
                  isLoading={isSubmitting}
                >
                  Güncelle
                </Button>
              </div>
            </form>
          </Card>

          <CategoryModal />
        </>
      )}
    </Formik>
  );
}

export default PostDetail;

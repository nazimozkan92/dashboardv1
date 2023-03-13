import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchPost, updatePost } from "../../../api";

import {
  Box,
  Button,
  Card,
  Divider,
  FormControl,
  Grid,
  GridItem,
  Heading,
  Input,
  
} from "@chakra-ui/react";

import { Formik } from "formik";
import validationSchema from "../validations";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Categories from "./categories";

function AddNewPost() {
  const handleSubmit = async (values, bag) => {};

  return (
    <>
      <Formik
        initialValues={{
          title: "",
          shortText: "",
          content: "",
          categories: [],
        }}
        // validationSchema={validationSchema}
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
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.title && errors.title}
                        disabled={isSubmitting}
                        className="postTitleInput"
                      />
                      <Input
                        name="shortText"
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
                          data=""
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
                      <Categories />

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
                        {/* <Image src={data.pictureList} alt="Dan Abramov" /> */}
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
                    </GridItem>
                  </Grid>
                </FormControl>
                <div className="postNavButton">
                  <Button
                    colorScheme="teal"
                    type="submit"
                    isLoading={isSubmitting}
                  >
                    Yayınla
                  </Button>
                </div>
              </form>
            </Card>
          </>
        )}
      </Formik>
    </>
  );
}

export default AddNewPost;

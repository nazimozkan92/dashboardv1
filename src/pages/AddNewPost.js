import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { Button } from "@chakra-ui/react";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function AddNewPost() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const sendHtmlData = () => {
    console.log(editorState);
  };
  return (
    <>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
      <Button onClick={sendHtmlData}>Send Data</Button>
    </>
  );
}

export default AddNewPost;

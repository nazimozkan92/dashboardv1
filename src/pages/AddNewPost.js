import React, { useState } from "react";
// import { EditorState } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
import { Button } from "@chakra-ui/react";

// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function AddNewPost() {
  // const [editorState, setEditorState] = useState(() =>
  //   EditorState.createEmpty()
  // );

  // const sendHtmlData = () => {
  //   console.log(editorState);
  // };
  return (
    <>
      {/* <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      /> */}
      <div className="App">
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
          }}
          onBlur={(event, editor) => {}}
          onFocus={(event, editor) => {}}
        />
      </div>
    </>
  );
}

export default AddNewPost;

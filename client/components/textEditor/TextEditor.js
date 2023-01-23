import React, { useEffect, useState } from 'react';
import ReactQuill from "react-quill";
import debounce from "../../helpers";
// import { withStyles } from "@mui/styles";
// import styles from "./styles.css"

// export const book = withStyles(styles)(TextEditor)

const TextEditor = () => {
  const [value, setValue] = useState('');
  console.log("QUILL VALUE", value)

  return <ReactQuill  value={value} onChange={setValue} />;
}


export default TextEditor;

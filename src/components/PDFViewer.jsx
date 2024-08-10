import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { openLink } from "./Navbar";
import { resumePath } from "../constants";

const PDFViewer = () => {
  return (
    <div>
      <Document file={resumePath}>
        <Page
          pageNumber={1}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
    </div>
  );
};

export default PDFViewer;

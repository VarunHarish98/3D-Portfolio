import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { openLink } from "./Navbar";

const PDFViewer = () => {
  return (
    <div>
      <Document file="src/assets/VarunHHResume.pdf">
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

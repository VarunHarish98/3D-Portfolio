import React, { useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
const PDFViewer = () => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <div>
      <Document file="src/assets/VarunHHResume.pdf">
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default PDFViewer;

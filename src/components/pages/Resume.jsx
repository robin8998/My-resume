import React,{useState} from 'react'
import {pdfjs} from "react-pdf"
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css';


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();

function Resume() {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({numPages}) {
      setNumPages(numPages);
    }
  
    return (
      <div>
        <Document file="/pdf/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    );
}

export default Resume
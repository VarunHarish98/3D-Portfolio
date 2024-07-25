import React from "react";
import { saveAs } from "file-saver";
import resumeVarun from "./../assets/VarunHHResume.pdf";
import downloadIcon from "./../assets/download.png";
import { handleAnalyticsEvent } from "../analytics/google-analytics";

const DownloadPDF = () => {
  const downloadPdf = () => {
    const fileName = "Varun_Hosadurga_Harish-Resume.pdf";
    saveAs(resumeVarun, fileName);
    handleAnalyticsEvent("Resume", `Resume_download`, "Navbar");

  };

  return (
    <button onClick={downloadPdf}>
      <img src={downloadIcon} className="w-6 h-6"/>
    </button>
  );
};

export default DownloadPDF;

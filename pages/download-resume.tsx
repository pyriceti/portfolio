import { NextPage }        from "next";
import React, { useState } from "react";
import { ResumeLayout }    from "../components/resume";

type DownloadResumePageProps = {}

const DownloadResumePage: NextPage<DownloadResumePageProps> = (props) => {

  const [isPDFGenerating, setIsPDFGenerating] = useState(false);

  const generateAndDlPDF = async () => {
    setIsPDFGenerating(true);
    const res = await fetch("/api/download-resume", { method: "GET", headers: { "Accept": "application/pdf" } });
    const result = await res.arrayBuffer();
    const blob = new Blob([result], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = `Baptiste_PERRAUD_CV.pdf`;
    link.click();
    setIsPDFGenerating(false);
  };

  const onPrintBtnClick = () => window.print();

  const onDlPdfBtnClick = () => generateAndDlPDF();

  return <ResumeLayout
    onPrintBtnClick={onPrintBtnClick}
    onDlPdfBtnClick={onDlPdfBtnClick}
    isPdfGenerating={isPDFGenerating}
  />;
};

export default DownloadResumePage;
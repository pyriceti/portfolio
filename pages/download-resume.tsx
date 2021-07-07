import { GetServerSideProps, NextPage } from "next";
import React                            from "react";
import { componentToPDFBuffer }         from "../util";
import { ResumeLayout }                 from "../components/resume";
import pdf                              from "html-pdf";
import phantomjs                        from "phantomjs";

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  const exportPDF = true;
  const isServer = !!req;

  const pdfOptions: pdf.CreateOptions = {
    phantomPath: phantomjs.path,
    format: "A4",
    orientation: "portrait",
    border: "10mm",
    footer: {
      height: "10mm",
    },
    type: "pdf",
    timeout: 30000,
  };

  if (isServer && exportPDF) {
    const buffer = await componentToPDFBuffer(
      <ResumeLayout/>,
      pdfOptions,
    );

    // Uncomment to make download automatic
    // res.setHeader("Content-disposition", "attachment; filename=\"article.pdf");
    res.setHeader("Content-Type", "application/pdf");

    // Output the pdf buffer
    res.end(buffer);
  }

  return { props: {} };
};

type DownloadResumePageProps = {}

const DownloadResumePage: NextPage<DownloadResumePageProps> = () => null;

export default DownloadResumePage;
import { GetServerSideProps, NextPage } from "next";
import React                            from "react";
import { componentToPDFBuffer }         from "../util";
import { ResumeLayout }                 from "../components/resume";
import pdf                              from "html-pdf";
import { tmpdir }                       from "os";
import path                             from "path";

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  const exportPDF = true;
  const isServer = !!req;

  process.env.FONTCONFIG_PATH = path.join(process.cwd(), "fonts");
  process.env.LD_LIBRARY_PATH = path.join(process.cwd(), "bins");

  let basePath = process.cwd()
  // if (process.env.NODE_ENV === 'production') {
  //   basePath = path.join(process.cwd(), '.next/serverless/chunks')
  // }

  // path.resolve(basePath, 'fonts', 'fonts.conf')
  // path.resolve(basePath, 'fonts', 'CircularStd-Book.otf');
  // path.resolve(basePath, 'fonts', 'Raleway-Regular.ttf');

  const pdfOptions: pdf.CreateOptions = {
    phantomPath: path.resolve(
      process.cwd(),
      "node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs"
    ),
    directory: tmpdir(),
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
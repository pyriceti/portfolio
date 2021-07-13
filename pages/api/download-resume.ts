import type { NextApiRequest, NextApiResponse } from "next";

async function printPDF(referer: string) {
  let chrome: any = {};
  let puppeteer;

  // Running on the Vercel platform
  if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
    chrome = require("chrome-aws-lambda");
    puppeteer = require("puppeteer-core");
  }
  // Running locally
  else {
    puppeteer = require("puppeteer");
  }

  try {
    let browser;

    // Running on the Vercel platform
    if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
      browser = await puppeteer.launch({
        args: [...chrome.args, "--hide-scrollbars", "--disable-web-security"],
        defaultViewport: chrome.defaultViewport,
        executablePath: await chrome.executablePath,
        headless: true,
        ignoreHTTPSErrors: true,
      });
    }
    // Running locally
    else {
      browser = await puppeteer.launch({ headless: true });
    }

    const page = await browser.newPage();
    await page.goto(referer, { waitUntil: "networkidle0" });
    const pdf = await page.pdf({ format: "a4" });
    await browser.close();
    return pdf;

  } catch (err) {
    console.error(err);
    return null;
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const pdf = await printPDF(req.headers.referer);
  if (pdf === null)
    return res.status(500).end();

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Length", pdf.length);
  res.status(200).send(pdf);
}
import type { NextApiRequest, NextApiResponse } from "next";
import chromium                                 from "chrome-aws-lambda";
import playwright                               from "playwright-core";

async function printPDF(req: NextApiRequest) {
  const isVercel = process.env.NODE_ENV !== "development" && process.env.AWS_LAMBDA_FUNCTION_VERSION;

  // Start Playwright with the dynamic chrome-aws-lambda args
  const browser = await playwright.chromium.launch({
    args: chromium.args,
    executablePath:
      isVercel
        ? await chromium.executablePath
        : process.env.PW_CHROMIUM_PATH,
    headless: isVercel ?
      chromium.headless :
      true,
  });

  // Create a page with the recommended Open Graph image size
  const page = await browser.newPage({
    isMobile: false,
    ignoreHTTPSErrors: true,
    viewport: {
      width: 1920,
      height: 1080,
    },
  });

  // Extract the url from the referer
  const url: string = req.headers.referer as string;

  // await page.emulateMedia({ media: "print" });

  await page.goto(url);

  const data = await page.pdf({
    format: "A4",
    margin: {
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
    },
    landscape: false,
    displayHeaderFooter: false,
  });


  await browser.close();
  return data;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const pdf = await printPDF(req);
  if (pdf === null)
    return res.status(500).end();

  // Set the s-maxage property to cache at the CDN layer, and max-age for the client browser cache
  res.setHeader(
    "Cache-Control",
    "s-maxage=31536000, max-age=31536000, stale-while-revalidate",
  );
  res.setHeader("Content-Type", "image/jpeg");
  res.setHeader("Content-Length", pdf.length);
  res.end(pdf);

  // res.status(200).send(pdf);
}
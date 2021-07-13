import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer                                from "puppeteer";

async function printPDF(referer: string) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(referer, { waitUntil: "networkidle0" });
  const pdf = await page.pdf({ format: "a4" });
  await browser.close();
  return pdf;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const pdf = await printPDF(req.headers.referer);
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Length", pdf.length);
  res.status(200).send(pdf);
}
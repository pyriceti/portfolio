const playwright = require("playwright-core");
const chromium = require("chrome-aws-lambda");

async function generateCVPdf() {
  // Start Playwright with the dynamic chrome-aws-lambda args
  const browser = await playwright.chromium.launch({
    args: chromium.args,
    executablePath: process.env.PW_CHROMIUM_PATH,
    headless: true,
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

  await page.goto("http://localhost:3000/download-resume");

  await page.pdf({
    format: "A4",
    margin: {
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
    },
    landscape: false,
    displayHeaderFooter: false,
    path: "public/files/Baptiste_PERRAUD_CV.pdf",
  });

  await browser.close();
  console.log("All done, CV generated in public/files/Baptiste_PERRAUD_CV.pdf");
}

generateCVPdf();
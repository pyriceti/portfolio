import { renderToStaticMarkup } from "react-dom/server";
import pdf                      from "html-pdf";

const defaultOptions: pdf.CreateOptions = {
  format: "A4",
  orientation: "portrait",
  border: "10mm",
  footer: {
    height: "10mm",
  },
  type: "pdf",
  timeout: 30000,
};

const componentToPDFBuffer = (component, options: pdf.CreateOptions = defaultOptions) => {
  return new Promise((resolve, reject) => {
    const html = renderToStaticMarkup(component);

    pdf.create(html, options).toBuffer((err, buffer) => {
      if (err) {
        return reject(err);
      }

      return resolve(buffer);
    });
  });
};

export default componentToPDFBuffer;
import { renderToStaticMarkup } from "react-dom/server";
import pdf                      from "html-pdf";

const componentToPDFBuffer = (component, options: pdf.CreateOptions) => {
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
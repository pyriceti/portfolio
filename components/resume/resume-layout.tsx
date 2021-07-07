import resumeLayoutStyles from "./resume-layout.module.scss";

type ResumeLayoutProps = {};

const ResumeLayout = (_: ResumeLayoutProps): JSX.Element => {
  return (
    <html>
    <head>
      <meta charSet="utf8"/>
      <link rel="stylesheet" href="http://localhost:3000/styles/resume.css"/>
    </head>
    <body>
    <div className={resumeLayoutStyles.resumeLayoutGlobalContainer}>
      TEST
    </div>
    </body>
    <style jsx>{`
      html, body {
        background-color: red
      }
    `}</style>
    </html>
  );
};

export default ResumeLayout;
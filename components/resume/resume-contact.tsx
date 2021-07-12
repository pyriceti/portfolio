import resumeLayoutStyles  from "./resume-layout.module.scss";
import resumeContactStyles from "./resume-contact.module.scss";

const contactItems = [
  {
    icon: <svg width="25.554" height="29.507" viewBox="0 0 6.761 7.807" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.761 5.855l-3.38 1.952L0 5.855V1.952L3.38 0l3.381 1.952z" fill="#8e2621"/>
      <g fill="#fff">
        <path
          d="M2.146 1.625h2.47v.616h-2.47zM2.146 2.505h2.47V5.11h-2.47zM2.146 6.131h2.47v-.757h-2.47zm1.34-.251h-.255v-.261h.256z"/>
      </g>
    </svg>,
    text: "+33 6 25 13 67 96",
    link: "tel:+33625136796",
  },
  {
    icon: <svg width="25.553" height="29.507" viewBox="0 0 6.761 7.807" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.761 1.952L3.381 0 0 1.952v3.903l3.38 1.952 3.381-1.952z" fill="#8e2621"/>
      <path d="M4.783 3.224v-.88h-.831v.235l-.571-.443-2.103 1.631.358.48 1.745-1.353 1.744 1.354.358-.481z"
            fill="#fff"/>
      <path d="M3.38 3.21L1.979 4.3V5.67h1.125v-.928h.555v.928h1.125V4.3z" fill="#fff"/>
    </svg>,
    text: "Paris, France",
  },
  {
    icon: <svg width="25.553" height="29.507" viewBox="0 0 6.761 7.807" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.761 1.952L3.381 0 0 1.952v3.903l3.38 1.952 3.381-1.952z" fill="#8e2621"/>
      <path
        d="M1.502 2.939v1.947l1.351-.922zM3.723 4.104l-.343.26-.342-.26-1.414.965h3.513zM3.908 3.964l1.351.922V2.939zM1.602 2.738l.023.018L3.38 4.088l1.755-1.332.023-.018z"
        fill="#fff"/>
    </svg>,
    text: "pyriceti@pm.me",
    link: "mailto:pyriceti@pm.me",
  },
  {
    icon: <svg width="25.553" height="29.507" viewBox="0 0 6.761 7.807" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.761 1.952L3.381 0 0 1.952v3.903l3.38 1.952 3.381-1.952z" fill="#8e2621"/>
      <path
        d="M5.216 3.511l-.83-.937H2.878l-.904.93-1.09.217v.827l.248.124a.816.816 0 01.81-.794.817.817 0 01.804.924h1.21a.817.817 0 01.804-.924c.443 0 .804.361.81.807l.307-.137v-.869z"
        fill="#fff"/>
      <path
        d="M2.501 4.7a.563.563 0 00-.559-.567.563.563 0 00-.55.669.567.567 0 001.098.01A.575.575 0 002.5 4.7M5.32 4.7a.563.563 0 00-.56-.567.563.563 0 00-.549.67.567.567 0 001.097.009.575.575 0 00.011-.113"
        fill="#fff"/>
    </svg>,
    text: "Permis B",
  },
  {
    icon: <svg width="25.553" height="29.507" viewBox="0 0 6.761 7.807" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.761 1.952L3.381 0 0 1.952v3.903l3.38 1.952 3.381-1.952z" fill="#8e2621"/>
      <path
        d="M4.234 3.059V2.23h-1.69v.828m-1.155 0v2.517h3.983V3.059M2.82 2.502h1.138v.557H2.82zm1.276 2.094h-.431v.422h-.57v-.422h-.43v-.557h.43v-.423h.57v.423h.43z"
        fill="#fff"/>
    </svg>,
    text: "PSC1",
  },
];

type ResumeContactProps = {};

const ResumeContact = (_: ResumeContactProps): JSX.Element => {
  return (
    <section className={`${resumeContactStyles.contactSection} ${resumeLayoutStyles.leftColSection}`}>
      <h2 className="default-h2"><span>C</span>ontact</h2>
      <ul className={resumeContactStyles.contactList}>
        {contactItems.map((ci, i) =>
          <li key={i}>
            {ci.icon}
            {ci.link &&
            <a href={ci.link} target="_blank">{ci.text}</a>
            }
            {!ci.link && ci.text}
          </li>
        )}
      </ul>
    </section>
  );
};

export default ResumeContact;


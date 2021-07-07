import homeStyles                      from "../../styles/index.module.scss";
import { Skills, Experience, Studies } from "./index";
import React                           from "react";
import { Col, Container, Row } from "react-bootstrap";
import utilStyles                      from "../../styles/utils.module.scss";

type CVProps = {};

const CV = (_: CVProps): JSX.Element => {

  return (
    <section id="resume" className={homeStyles.resumeSection}>
      <div className={homeStyles.resumeHeader}>
        <div className={homeStyles.resumeHeaderOverlay}>
          <Container>
            <Row>
              <Col lg={8} className="offset-lg-2">
                <h2 className={`${utilStyles.textAlmostWhite} fw-normal`}>CV</h2>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <Skills/>
      <Experience/>
      <Studies/>
    </section>
  );
};


export default CV;
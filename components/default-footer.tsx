import defaultFooterStyles  from "./default-footer.module.scss";
import { Container } from "react-bootstrap";
import React         from "react";

const DefaultFooter: React.FC<React.HTMLProps<HTMLElement>> = (props) => {

  return (
    <div className={`${defaultFooterStyles.footerBottom} footer-bottom py-4`}>
      <Container>
        <p className={`${defaultFooterStyles.copyright} my-0 semi-bold`}><small>© 2019 B. PERRAUD - Tous droits
          réservés</small></p>
      </Container>
    </div>
  );
};

export default DefaultFooter;

import { React } from "react";

export function FooterComponent() {
  return (
    <footer className="page-footer fixed-bottom">
      <div className="footer-copyright py-3 text-right">
          <a className="nav-link waves-effect" href="mailto:alisa.meteleva@t-systems.com"><i className="fa fa-envelope"></i>
          <span>    Contact us</span></a>
      </div>
    </footer>
  );
}

export default FooterComponent;

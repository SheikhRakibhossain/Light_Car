import logo from "../../assets/logo/car-logo.svg";

const Footer = () => {
  return (
    <>
      <footer
        className="footer text-white px-6 py-10  bg-black bg-cover bg-center bg-no-repeat"

      >
        <aside>
          <img className="w-20" src={logo} alt="car website logo" />
          <p>
            SRM Industries Ltd.
            <br />
            Providing reliable tech since 2000
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <span className="w-16 h-1 bg-red">
            <hr />
          </span>
          <a className="link link-hover">Oil Change</a>
          <a className="link link-hover">Engine Repair</a>
          <a className="link link-hover">Furnish</a>
          <a className="link link-hover">Tair or Wheel</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <span className="w-16 h-1 bg-red">
            <hr />
          </span>
          <a className="link link-hover">Tesla</a>
          <a className="link link-hover">Audi</a>
          <a className="link link-hover">Marcedes</a>
          <a className="link link-hover">Toyota</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <span className="w-16 h-1 bg-red">
            <hr />
          </span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
          <a className="link link-hover">Trust & Legalize</a>
        </nav>
      </footer>
      <div className="footer footer-start p-4 bg-base-300 text-base-content">
        <aside>
          <p>Copyright © 2023 - All right reserved by RSM Rakib.io</p>
        </aside>
      </div>
    </>
  );
};

export default Footer;

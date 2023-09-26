import  logo  from '../../assets/logo/car-logo.svg';

const Footer = () => {
    return (
        <footer className="footer px-6 py-10 bg-base-200 text-base-content bg-cover bg-center bg-no-repeat" style={{

          backgroundImage:"url(https://img.freepik.com/free-photo/beautiful-car-commercial-night_23-2148283413.jpg?w=996&t=st=1695719181~exp=1695719781~hmac=732442d6e6fc595526914fa579b02d33c43fbf1c6ab7b345a1de25fb98f8a3ca)"
        }}>
        <aside>
            <img className='w-20' src={logo} alt="car website logo" />
          <p>SRM Industries Ltd.<br/>Providing reliable tech since 1992</p>
        </aside> 
        <nav>
          <header className="footer-title">Services</header> 
          <span className='w-16 h-1 bg-red'><hr /></span>
          <a className="link link-hover">Branding</a> 
          <a className="link link-hover">Design</a> 
          <a className="link link-hover">Marketing</a> 
          <a className="link link-hover">Advertisement</a>
        </nav> 
        <nav>
          <header className="footer-title">Company</header> 
          <span className='w-16 h-1 bg-red'><hr /></span>
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">Jobs</a> 
          <a className="link link-hover">Press kit</a>
        </nav> 
        <nav>
          <header className="footer-title">Legal</header>
          <span className='w-16 h-1 bg-red'><hr /></span>
          <a className="link link-hover">Terms of use</a> 
          <a className="link link-hover">Privacy policy</a> 
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    );
};

export default Footer;
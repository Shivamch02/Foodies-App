import appstore from "../../public/assets/appstore.png";
import playstore from "../../public/assets/playstore.jpeg";
const Footer = () => {
  return (
    <footer className="bg-black text-white p-8 md:p-4 mt-6 md:mt-4 md:h-48 big-footer ">
      <div className="footer-div footer flex justify-evenly">
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: chshivam53.com</p>
          <p>Phone: 6393948186</p>
        </div>
        <div className="">
          <h2>Follow Us</h2>
          <a className="py-4" href="#">
            Facebook
          </a>{" "}
          <br />
          <a href="#">Twitter</a>
          <br />
          <a href="#">Instagram</a>
        </div>
        <div className="footer-section">
          <h2>Download Our App</h2>
          <p>Available on the App Store and Google Play</p>
          <div className="flex justify-between footer-img">
            <img className="w-30 h-12" src={appstore} alt="App Store" />
            <img className="w-30 h-12" src={playstore} alt="Google Play" />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 md:m-12 copyright">
        &copy; 2023 Eats <span>Easy</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

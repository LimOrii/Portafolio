import { socialImgs } from "../constants";

const Footer = () => {
  return (
      <footer className="footer bg-gray-100 py-6">
        <div className="footer-container max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Términos y condiciones */}
          <div>
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Terms & Conditions
            </a>
          </div>

          {/* Íconos sociales */}
          <div className="flex gap-4">
            {socialImgs.map((socialImg, index) => (
                <div key={index} className="icon">
                  <img
                      src={socialImg.imgPath}
                      alt={`social-icon-${index}`}
                      className="w-6 h-6 object-contain"
                  />
                </div>
            ))}
          </div>

          {/* Derechos de autor */}
          <div>
            <p className="text-sm text-gray-600 text-center md:text-right">
              © {new Date().getFullYear()} Adrian Hajdin. All rights reserved.
            </p>
          </div>

        </div>
      </footer>
  );
};

export default Footer;

import { useState, useEffect } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
        <div className="inner flex items-center justify-between">
          <a href="#hero" className="logo flex items-center gap-2">
            <img
                src="/images/fav.png"
                alt="Lim.Orii logo"
                className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-bold">Lim.Orii</span>
          </a>

          <nav className="desktop">
            <ul className="flex gap-6">
              {navLinks.map(({ link, name }) => (
                  <li key={name} className="group">
                    <a href={link}>
                      <span>{name}</span>
                      <span className="underline" />
                    </a>
                  </li>
              ))}
            </ul>
          </nav>

          <a href="#contact" className="contact-btn group">
            <div className="inner">
              <span>Contactame</span>
            </div>
          </a>
        </div>
      </header>
  );
};

export default NavBar;
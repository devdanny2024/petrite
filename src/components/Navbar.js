import { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility

  // Change navbar background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  // Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling effect
      setIsMenuOpen(false); // Close the menu after clicking
    }
  };

  return (
    <nav className={isScrolled ? 'navbar active' : 'navbar'}>
      <div className="nav-container">
      <div className="logo">
          <Image src="/images/logo.png" alt="Logo" width={100} height={26} />
        </div>
        <div className="logo-phone">
          <Image src="/images/w-rebel.png" alt="Logo" width={50} height={50} />
        </div>
        <button
          className={`hamburger ${isMenuOpen ? 'open' : ''}`}
          onClick={handleMenuToggle}
        >
          {/* Hamburger Icon */}
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation Links */}
        <ul className={`navLinks ${isMenuOpen ? 'showMenu' : ''}`}>
          <li>
            <a href="/" onClick={() => scrollToSection('products')}>Products</a>
          </li>
          <li>
            <a href="#about" onClick={() => scrollToSection('services')}>Services</a>
          </li>
          <li>
            <a href="#contact" onClick={() => scrollToSection('about')}>About us</a>
          </li>
          <li>
            <a href="#contact" onClick={() => scrollToSection('blog')}>Blog</a>
          </li>
        </ul>
      </div>
      <div className='create-btn'>
        Create an account 
      </div>
    </nav>
  );
};

export default Navbar;

import Link from 'next/link';

export default function Nav({ setMobileToggle }) {
  const handleNavClick = (sectionId) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (setMobileToggle) {
      setMobileToggle(false);
    }
  };

  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
          Home
        </a>
      </li>
      <li>
        <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>
          About
        </a>
      </li>
      <li>
        <a href="#service" onClick={(e) => { e.preventDefault(); handleNavClick('service'); }}>
          Service
        </a>
      </li>
      <li>
        <a href="#client" onClick={(e) => { e.preventDefault(); handleNavClick('client'); }}>
          Report
        </a>
      </li>
      <li>
        <a href="#team" onClick={(e) => { e.preventDefault(); handleNavClick('team'); }}>
          Client
        </a>
      </li>
      <li>
        <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>
          Contact
        </a>
      </li>
    </ul>
  );
}

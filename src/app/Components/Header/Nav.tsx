import Link from 'next/link';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link href="/" onClick={() => setMobileToggle(false)}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/about" onClick={() => setMobileToggle(false)}>
          About
        </Link>
      </li>
      <li>
        <Link href="/service" onClick={() => setMobileToggle(false)}>
          Service
        </Link>
      </li>
      <li>
        <Link href="/client" onClick={() => setMobileToggle(false)}>
          Client
        </Link>
      </li>
      <li>
        <Link href="/team" onClick={() => setMobileToggle(false)}>
          Team
        </Link>
      </li>
      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}

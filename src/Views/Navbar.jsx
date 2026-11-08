const items = [
  {
    label: "Home",
    href: "#home",
    icon: <path d="m3 10 9-7 9 7v10H15v-7H9v7H3Z" />
  },
  {
    label: "Menu",
    icon: (
      <>
        <path d="M3 8h13v6a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6Z" />
        <path d="M16 9h2a3 3 0 0 1 0 6h-2M6 3v2m4-2v2" />
      </>
    )
  },
  {
    label: "About Us",
    icon: (
      <>
        <path d="M12 5C9 3 6 3 2 4v15c4-1 7-1 10 1 3-2 6-2 10-1V4c-4-1-7-1-10 1Z" />
        <path d="M12 5v15" />
      </>
    )
  },
  {
    label: "Contact",
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m3 6 9 7 9-7" />
      </>
    )
  }
];

const Navbar = ({onHomeClick}) => (
  <nav className="cr-nav" aria-label="Main navigation">
    {items.map(({label, href, icon}) => (
      <a
        key={label}
        className="cr-nav-link"
        href={href}
        onClick={href === "#home" ? onHomeClick : undefined}
        aria-current={href === "#home" ? "page" : undefined}
        aria-disabled={href ? undefined : true}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {icon}
        </svg>
        <span>{label}</span>
      </a>
    ))}
  </nav>
);

export default Navbar;
import { NavLink } from "react-router-dom";

function Sidebar() {
  const links = [
    { path: "/", label: "Home", emoji: "🏠" },
    { path: "/explore", label: "Explore", emoji: "🔍" },
    { path: "/learn", label: "Learn", emoji: "📚" },
    { path: "/signin", label: "Sign In", emoji: "🔑" },
    { path: "/signup", label: "Sign Up", emoji: "👤" },
  ];

  return (
    <aside className="hidden">
      {links.map((link) => (
        <NavLink key={link.path} to={link.path}>
          <span>{link.emoji}</span>
          <span>{link.label}</span>
        </NavLink>
      ))}
    </aside>
  );
}

export default Sidebar;

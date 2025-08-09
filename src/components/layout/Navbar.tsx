import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="h-nav bg-secondary flex flex-row items-center justify-between px-sides-app">
      <div className="flex h-full w-36 items-center justify-start">
        <Link to="/">
          <img src="/logo.png" alt="logo" />
        </Link>
      </div>
      <div className="flex items-center justify-evenly w-1/4 min-w-[400px]">
        <Link to="/nav1">Nav1</Link> {/* Add page to routes/index.tsx */}
      </div>
    </nav>
  );
};

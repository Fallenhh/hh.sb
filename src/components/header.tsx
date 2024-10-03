import { Link } from 'waku';

export const Header = () => {
  return (
    <header className="flex flex-row columns-4 items-center lg:fixed md:fixed gap-4 p-6 left-0 top-0 w-screen bg-white drop-shadow h-16">
      <div className="flex">
      <h2 className="header-item">
        <Link to="/">Home</Link>
      </h2>
      </div>
      <div className="flex">
      <h2 className="header-item">
        <Link to="/about">About</Link>
      </h2>
      </div>
    </header>
  );
};

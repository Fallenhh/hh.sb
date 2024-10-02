import { Link } from 'waku';

export const Header = () => {
  return (
    <header className="flex columns-2 items-center gap-4 p-6 fixed left-0 top-0 w-screen bg-white drop-shadow">
      <nav>
      <div className="flex">
      <h2 className="text-lg font-bold tracking-tight">
        <Link to="/">Home</Link>
      </h2>
      </div>
      <div className="flex">
      <h2 className="text-lg font-bold tracking-tight">
        <Link to="/about">About</Link>
      </h2>
      </div>
      </nav>
    </header>
  );
};
